import { Watch } from 'react-loader-spinner';
import ImageGallery from '../ImageGallery/ImageGallery';

export default function Loader({ images, onClick }) {
  return (
    <div role="alert">
      <div>
        {/* Params spinner Watch */}
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        Loading...
      </div>
      {images.length > 0 && <ImageGallery images={images} onClick={onClick} />}
    </div>
  );
}
