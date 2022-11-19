import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar';
import fetchImages from './apiRequest/apiRequest';
import ImageGallery from './ImageGallery/ImageGallery';
import RequestError from './interfaceEl/RequestError';
import Loader from './interfaceEl/Loader';
import Button from './interfaceEl/Button';
import Modal from './interfaceEl/Modal';

import { IdleText } from './SearchResult.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class SearchResult extends Component {
  state = {
    searchName: '',
    images: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    largeImage: '',
  };

  componentDidMount() {
    const prevName = localStorage.getItem('SearchQuerry');
    const prevParsedName = JSON.parse(prevName);

    if (prevParsedName) {
      this.setState({ searchName: prevParsedName });
    }

    const prevPage = localStorage.getItem('Page');
    const prevParsedPage = JSON.parse(prevPage);

    if (prevParsedPage) {
      this.setState({ page: prevParsedPage });
    }

    const prevImages = localStorage.getItem('Images');
    const prevParsedImages = JSON.parse(prevImages);

    if (prevParsedImages) {
      this.setState({ images: prevParsedImages, status: Status.RESOLVED });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.searchName;
    const nextName = this.state.searchName;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    const prevImages = prevState.images;
    const nextImages = this.state.images;

    if (prevName !== nextName || prevPage !== nextPage) {
      fetchImages(nextName, nextPage)
        .then(response => [response.hits, response.total])
        .then(([requestImages, allImages]) => {
          ///
          if (requestImages.length === 0) {
            toast.info('🦄 No images found for your search query!');
            this.setState({ status: Status.IDLE });
          }
          ////////////////////////
          else {
            if (nextPage === 1) {
              if (requestImages.length === allImages) {
                toast.success(
                  `Only 🦄 ${requestImages.length} images found for your search query. No other images found !`
                );
              }
              ///
              else {
                toast.success(
                  `First 🦄 ${requestImages.length} images found for your search query!`
                );
              }
              ///
              this.setState(prevState => ({
                ...prevState,
                status: Status.RESOLVED,
                images: [...requestImages],
              }));
            }
            /////////////////////////
            else {
              if (requestImages.length === allImages) {
                toast.success(
                  `🦄 You have uploaded ALL ${requestImages.length} available images for your search query. No other images found !`
                );
              }
              ///
              else {
                toast.success(
                  `🦄 Next ${requestImages.length} images found for your search query!`
                );
              }
              ///
              this.setState(prevState => ({
                ...prevState,
                status: Status.RESOLVED,
                images: [...prevState.images, ...requestImages],
              }));
            }
          }
        })
        .catch(error => this.setState({ error, status: Status.PENDING }));
    }

    // ============ LOCAL STORAGE ====================
    if (nextName !== prevName) {
      localStorage.setItem('SearchQuerry', JSON.stringify(nextName));
    }

    if (nextPage !== prevPage) {
      localStorage.setItem('Page', JSON.stringify(nextPage));
    }

    if (nextImages !== prevImages) {
      localStorage.setItem('Images', JSON.stringify(nextImages));
    }
  }

  handleSearchbarSubmit = newSearchName => {
    if (newSearchName === this.state.searchName) {
      toast.info('🦄 You entered the previous search word!');
      return;
    }

    this.setState({
      page: 1,
      searchName: newSearchName,
      status: Status.PENDING,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
    // this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleClickFromItem = largeImage => {
    this.setState({ largeImage });
  };

  // onModalOpen = () => {
  //   this.setState({ largeImage: });
  // };

  onModalClose = () => {
    this.setState({ largeImage: '' });
  };

  render() {
    const { images, error, status } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />

        {status === Status.IDLE && (
          <IdleText>Search images and photos</IdleText>
        )}
        {status === Status.PENDING && (
          <Loader images={images} onClick={this.handleClickFromItem} />
        )}
        {status === Status.REJECTED && <RequestError message={error.message} />}
        {status === Status.RESOLVED && (
          <>
            <ImageGallery images={images} onClick={this.handleClickFromItem} />
            <Button loadMore={this.loadMore} />
            {this.state.largeImage.length > 0 && (
              <Modal src={this.state.largeImage} onClose={this.onModalClose} />
            )}
          </>
        )}
      </>
    );
  }
}
