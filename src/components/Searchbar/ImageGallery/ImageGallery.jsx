// Разметка галереи изображений по http-запросу
import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryList } from '../SearchResult.styled';

export default class ImageGallery extends Component {
  static onClick = PropTypes.func.isRequired;
  static images = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  );

  handleClickFromItem = largeImage => {
    this.props.onClick(largeImage);
  };

  render() {
    const { images } = this.props;
    return (
      <ImageGalleryList>
        {images.map(({ id, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            tags={tags}
            largeImageURL={largeImageURL}
            onClick={this.handleClickFromItem}
          />
        ))}
      </ImageGalleryList>
    );
  }
}
