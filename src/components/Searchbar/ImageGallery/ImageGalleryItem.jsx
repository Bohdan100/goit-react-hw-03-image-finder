import { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/styles.css';

export class ImageGalleryItem extends Component {
  handleClick = event => {
    event.preventDefault();

    const largeImageURL = event.target.name;
    this.props.onClick(largeImageURL);
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img
          src={largeImageURL}
          alt={tags}
          onClick={this.handleClick}
          name={largeImageURL}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
