import PropTypes from 'prop-types';
import '../../../styles/styles.css';

export const Button = ({ loadMore }) => {
  return (
    <button type="button" className="Button" onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
