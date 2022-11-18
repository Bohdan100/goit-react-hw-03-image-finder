// СКЕЛЕТОН - СПИНЕР - ОЖИДАНИЕ - СТАДИЯ ЗАГРУЗКИ ДАННЫХ С БЕКЕНДА

// Выбираем вид спинера Watch из react-loader-spinner
import { Watch } from 'react-loader-spinner';
import ImageGallery from '../ImageGallery/ImageGallery';

export default function Loader({ searchName }) {
  // const images = {
  //   name: searchName,
  // };
  return (
    <div role="alert">
      <div>
        {/* Параметры спинера Watch */}
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
      {/* ЗАКИДЫВАЕМ СЮДА ImageGallery И РЕНДЕРИМ В НЕМ галерею */}
      {/* <ImageGallery images={images} /> */}
    </div>
  );
}
