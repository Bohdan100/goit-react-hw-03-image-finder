import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/styles.css';

const Button = ({ loadMore }) => {
  return (
    <button type="button" className="Button" onClick={loadMore}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
