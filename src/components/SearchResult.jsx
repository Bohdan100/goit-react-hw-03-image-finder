import React, { Component } from 'react';

import fetchImages from 'apiRequest';
import {
  renderSuccesNotification,
  notFoundNotification,
  informativeNotification,
} from 'toastNotification';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
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
          if (renderImages.length === 0) {
            notFoundNotification();
            this.setState({ status: Status.IDLE });
          } else {
            renderSuccesNotification(renderImages, allImages, nextPage);
            this.setState(prevState => ({
              ...prevState,
              status: Status.RESOLVED,
              images: [...prevState.images, ...renderImages],
            }));
          }
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  handleSearchbarSubmit = newSearchName => {
    if (newSearchName === this.state.searchName) {
      informativeNotification();
      return;
    }

    this.setState({
      page: 1,
      searchName: newSearchName,
      status: Status.PENDING,
      images: [],
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
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.handleClickFromItem} />
        )}

        {status === Status.IDLE && (
          <IdleText>Search images and photos</IdleText>
        )}
        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <RequestError message={error.message} />}
        {status === Status.RESOLVED && (
          <>
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
