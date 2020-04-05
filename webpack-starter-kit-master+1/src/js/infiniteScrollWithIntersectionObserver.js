import 'intersection-observer';
import { refs } from './refs.js';
import { fetchForInfiniteScroll } from './fetchForInfiniteScroll.js';

export const infiniteScroll = target => {
  const options = {
    rootMargin: '300px 0px',
    threshold: 0.01,
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fetchForInfiniteScroll();
      }
    });
  }, options);
  io.observe(target);
};
