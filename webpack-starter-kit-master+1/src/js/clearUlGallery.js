import { refs } from './refs.js';

export function clearUlGallery() {
  refs.ulGallery.innerHTML = '<li class="grid-sizer"></li>';
}
