import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryCard, Image } from '../SearchResult.styled';

export class ImageGalleryItem extends Component {
  handleClick = event => {
    event.preventDefault();

    const largeImageURL = event.target.name;
    this.props.onClick(largeImageURL);
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <ImageGalleryCard>
        <Image
          src={largeImageURL}
          alt={tags}
          onClick={this.handleClick}
          name={largeImageURL}
        />
      </ImageGalleryCard>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
