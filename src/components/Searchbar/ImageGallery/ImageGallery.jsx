// Разметка галереи изображений по http-запросу
import { Component } from 'react';
import PropTypes from 'prop-types';
import { theme } from '../../constants/theme';

import { ImageGalleryItem } from './ImageGalleryItem';
import { Box } from '../SearchResult.styled';

export default class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    ),
  };

  handleClickFromItem = largeImage => {
    this.props.onClick(largeImage);
  };

  render() {
    const { images } = this.props;
    console.log('theme', theme);
    return (
      <Box mt={0} mb={0} p={0} ml="auto" mr="auto" bg={theme.colors.white}>
        {images.map(({ id, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            tags={tags}
            largeImageURL={largeImageURL}
            onClick={this.handleClickFromItem}
          />
        ))}
      </Box>
    );
  }
}
