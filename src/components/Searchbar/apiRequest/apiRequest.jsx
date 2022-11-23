const BASE_URL = 'https://pixabay.com/api';
const API_key = '29959892-dbc4da226a3c63fb0b6c6ac05';
const image_type = 'image_type=photo';
const orientation = 'orientation=horizontal';
const safesearch = 'safesearch=true';

const fetchImages = (name, page) => {
  return fetch(
    `${BASE_URL}/?key=${API_key}&q=${name}&${image_type}&${orientation}&${safesearch}&page=${page}&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(
        new Error(`No images for the search name: ${name}`)
      );
    })
    .then(response => [response.hits, response.total])
    .then(([requestImages, allImages]) => {
      const renderImages = requestImages.map(({ id, largeImageURL, tags }) => {
        return { id: id, largeImageURL: largeImageURL, tags: tags };
      });

      return [renderImages, allImages];
    });
};

export default fetchImages;
