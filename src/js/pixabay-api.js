// const API_KEY = '48273620-0132f44a126025621a132d295';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async query => {
  const searchParams = new URLSearchParams({
    key: '48273620-0132f44a126025621a132d295',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  
 const response = await fetch(
   `${BASE_URL}?${searchParams.toString()}`
  //  `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
 );
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
};
