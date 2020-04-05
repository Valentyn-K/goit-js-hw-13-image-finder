import { refs } from './refs.js';
export default {
  show() {
    refs.spiner.classList.remove('spiner-hidden');
  },

  hide() {
    refs.spiner.classList.add('spiner-hidden');
  },
};
