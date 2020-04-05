import * as basicLightbox from 'basiclightbox';
import { refs } from './refs.js';

export function lightBoxHandler(event) {
  console.log(event.target);
  if (event.target === refs.modal) {
    instance.close();
  }
}
