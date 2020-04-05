import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import '../css/masonry.css';
import { refs } from './refs.js';

export const masonryInstance = new Masonry('#gallery', {
  itemSelector: '.grid-item',
  columnWidth: refs.liGridSizer,
  percentPosition: true,
  gutter: 10,
  transitionDuration: '0.8s',
});
