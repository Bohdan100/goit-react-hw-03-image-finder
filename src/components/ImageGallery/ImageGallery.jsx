import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem';
import { Box } from '../SearchResult.styled';

const ImageGallery = ({ images, onClick }) => {
  const handleClickFromItem = largeImage => {
    onClick(largeImage);
  };

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
          onClick={handleClickFromItem}
        />
      ))}
    </Box>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
