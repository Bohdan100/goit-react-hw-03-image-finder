import React from 'react';
import PropTypes from 'prop-types';

import { BtnLoadMore } from '../SearchResult.styled';

const Button = ({ loadMore }) => {
  return (
    <BtnLoadMore type="button" className="Button" onClick={loadMore}>
      Load more
    </BtnLoadMore>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
