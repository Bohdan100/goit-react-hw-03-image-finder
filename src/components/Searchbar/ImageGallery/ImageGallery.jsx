// Разметка галереи изображений по http-запросу
import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import '../../../styles/styles.css';

export default class ImageGallery extends Component {
  handleClickFromItem = largeImage => {
    // console.log('ImageGallery', largeImage);
    this.props.onClick(largeImage);
  };

  render() {
    const { images } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map(({ id, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            tags={tags}
            largeImageURL={largeImageURL}
            onClick={this.handleClickFromItem}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.node)),
};
