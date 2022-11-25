import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const renderSuccesNotification = (renderImages, allImages, nextPage) => {
  if (nextPage === 1) {
    if (renderImages.length === allImages) {
      toast.success(
        `Only 🦄 ${renderImages.length} images found for your search query. No other images found !`
      );
    }
    ///
    else {
      toast.success(
        `First 🦄 ${renderImages.length} images found for your search query!`
      );
    }
    ///
  }
  /////////////////////////
  else {
    if (renderImages.length === allImages) {
      toast.success(
        `🦄 You have uploaded ALL ${renderImages.length} available images for your search query. No other images found !`
      );
    }
    ///
    else {
      toast.success(
        `🦄 Next ${renderImages.length} images found for your search query!`
      );
    }
  }
};

const notFoundNotification = () => {
  toast.info('🦄 No images found for your search query!');
};

const informativeNotification = () => {
  toast.info('🦄 You entered the previous search word!');
};

export {
  renderSuccesNotification,
  notFoundNotification,
  informativeNotification,
};
