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

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.searchName;
    const nextName = this.state.searchName;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      fetchImages(nextName, nextPage)
        .then(([renderImages, allImages]) => {
          ///
          if (renderImages.length === 0) {
            toast.info('🦄 No images found for your search query!');
            this.setState({ status: Status.IDLE });
          }
          ////////////////////////
          else {
            if (nextPage === 1) {
              if (renderImages.length === allImages) {
                toast.success(
                  `Only 🦄 ${renderImages.length} images found for your search query. No other images found !`
                );
              }
              ///
              else {
                toast.success(
                  `First 🦄 ${renderImages.length} images found for your search query!`
                );
              }
              ///
              this.setState(prevState => ({
                ...prevState,
                status: Status.RESOLVED,
                images: [...renderImages],
              }));
            }
            /////////////////////////
            else {
              if (renderImages.length === allImages) {
                toast.success(
                  `🦄 You have uploaded ALL ${renderImages.length} available images for your search query. No other images found !`
                );
              }
              ///
              else {
                toast.success(
                  `🦄 Next ${renderImages.length} images found for your search query!`
                );
              }
              ///

              this.setState(prevState => ({
                ...prevState,
                status: Status.RESOLVED,
                images: [...prevState.images, ...renderImages],
              }));
            }
          }
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
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
        {status === Status.PENDING && <Loader />}
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
