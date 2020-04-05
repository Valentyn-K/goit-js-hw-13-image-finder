import services from './apiService.js';
import { drawMarkup } from './drawMarkup.js';
import spiner from './spiner.js';

export function fetchForInfiniteScroll() {
  spiner.show();
  services.fetchImages().then(imagesArray => {
    console.log(imagesArray);
    drawMarkup(imagesArray);
    spiner.hide();
  });
}
