import { refs } from './refs.js';
import { handleInputSearchQuery } from './handleInputSearchQuery.js';
import debounce from 'lodash/debounce.js';

export const formInputListener = refs.searchForm.addEventListener(
  'input',
  debounce(handleInputSearchQuery, 500),
);
