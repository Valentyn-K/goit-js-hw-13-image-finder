import * as basicLightbox from 'basiclightbox';
import { refs } from './refs.js';

export function ulGalleryHandler(event) {
  if (event.target === refs.ulGallery) {
    return;
  }
  const datasetLargeURL = event.target.dataset.largeurl;
  const instance = basicLightbox.create(`<div class="modal">
    <img class="large-image" src="${datasetLargeURL}" width="800" height="600">
    </div>`);
  instance.show();
}
