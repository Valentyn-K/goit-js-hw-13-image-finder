import { refs } from './refs.js';
import { clearUlGallery } from './clearUlGallery.js';
import services from './apiService.js';
import { drawMarkup } from './drawMarkup.js';
import spiner from './spiner.js';
import { infiniteScroll } from './infiniteScrollWithIntersectionObserver.js';

export function handleInputSearchQuery(event) {
  clearUlGallery();
  services.resetPage();
  const inputValue = event.target.value;
  if (inputValue.length === 0) {
    clearUlGallery();
    return;
  }
  services.searchQuery = inputValue;
  spiner.show();

  services
    .fetchImages()
    .then(imagesArray => {
      // console.log(imagesArray);
      drawMarkup(imagesArray);
      spiner.hide();
    })
    .catch(error => {
      spiner.hide();
      console.log('Something went wrong!', error);
    });

  infiniteScroll(refs.ioTarget);
}
