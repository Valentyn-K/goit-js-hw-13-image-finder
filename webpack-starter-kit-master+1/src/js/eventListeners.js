import debounce from 'lodash/debounce.js';
import * as basicLightbox from 'basiclightbox';

import { refs } from './refs.js';
import { handleInputSearchQuery } from './handleInputSearchQuery.js';
import { ulGalleryHandler } from './ulGalleryHandler.js';
import { lightBoxHandler } from './lightBoxHandler.js';

export const formInputListener = refs.searchForm.addEventListener(
  'input',
  debounce(handleInputSearchQuery, 500),
);

export const ulGalleryListener = refs.ulGallery.addEventListener(
  'click',
  ulGalleryHandler,
);

export function lightBoxListener() {
  const visible = instance.visible();
  if (visible) {
    refs.modal.addEventListener('click', lightBoxHandler);
  }
}
