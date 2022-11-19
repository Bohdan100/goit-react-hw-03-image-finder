import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryCard, Image } from '../SearchResult.styled';

export class ImageGalleryItem extends Component {
  static onClick = PropTypes.func.isRequired;
  static largeImageURL = PropTypes.string.isRequired;
  static tags = PropTypes.string.isRequired;

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
