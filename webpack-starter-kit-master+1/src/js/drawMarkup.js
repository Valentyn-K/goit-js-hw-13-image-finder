import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import { refs } from './refs';
import { clearUlGallery } from './clearUlGallery.js';
import makeGridItem from './makeGridItem.js';
import { masonryInstance } from './masonry.js';

export function drawMarkup(imagesArray) {
  // clearUlGallery();
  const images = imagesArray.map(makeGridItem);
  refs.ulGallery.append(...images);

  masonryInstance.appended(images);
  const imagesLoadedInstance = imagesLoaded(refs.ulGallery);

  imagesLoadedInstance.on('progress', () => {
    masonryInstance.layout();
  });
}
