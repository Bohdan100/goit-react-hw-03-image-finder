import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar';
import fetchImages from './apiRequest/apiRequest';
import ImageGallery from './ImageGallery/ImageGallery';
import RequestError from './interfaceEl/RequestError';
import Loader from './interfaceEl/Loader';
import { Button } from './interfaceEl/Button';
import Modal from './interfaceEl/Modal';

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

    const imagesArray = this.state.images;

    if (prevName !== nextName || prevPage !== nextPage) {
      fetchImages(nextName, nextPage)
        .then(response => response.hits)
        .then(requestImages => {
          if (imagesArray.length === 0) {
            toast.info('🦄 No images found for your search word!');
          }
          if (nextPage === 1) {
            this.setState(prevState => ({
              ...prevState,
              status: Status.RESOLVED,
              images: [...requestImages],
            }));
          } else {
            this.setState(prevState => ({
              ...prevState,
              status: Status.RESOLVED,
              images: [...prevState.images, ...requestImages],
            }));
          }
        })
        .catch(error => this.setState({ error, status: Status.PENDING }));
    }
  }

  handleSearchbarSubmit = newSearchName => {
    if (newSearchName === this.state.searchName) {
      toast.info('🦄 You entered the previous search word!');
      return;
    }
    console.log('Сработал handleSearchbarSubmit');
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
    const { searchName, images, error, status } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {status === Status.IDLE && <div>Search images and photos</div>}
        {status === Status.PENDING && <Loader searchName={searchName} />}
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

// onSubmit={newSearchName => this.handleSearchbarSubmit(newSearchName)}
