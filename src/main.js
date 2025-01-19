import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.js-gallery a');

const showLoader = () => (loaderEl.hidden = false);
const hideLoader = () => (loaderEl.hidden = true);

const onSearchFormSubmit = async event => {
  event.preventDefault();
  galleryEl.innerHTML = ''; 
  const query = event.currentTarget.elements.user_query.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
    });
    return;
  }

  showLoader();

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'Attention',
        message: 'No images found!',
      });
      return;
    }
    renderGallery(data.hits, galleryEl);
    lightbox.refresh();
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images!',
    });
  } finally {
    hideLoader();
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
