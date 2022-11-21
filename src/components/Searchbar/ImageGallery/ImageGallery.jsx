// Разметка галереи изображений по http-запросу
import { Component } from 'react';
import PropTypes from 'prop-types';

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

    return (
      // as="ul": div --> ul
      <Box
        display="grid"
        gridGap={4}
        gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        mt={0}
        mb={0}
        p={0}
        ml="auto"
        mr="auto"
        bg="white"
        maxWidth="calc(100vw - 48px)"
        list-style="none"
        as="ul"
      >
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
