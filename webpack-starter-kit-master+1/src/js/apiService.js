const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  fetchImages() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=15837694-cfd882bdab50e7e30ec0ef461`;

    return fetch(baseUrl + requestParams)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();

        return parsedResponse.hits;
      });
  },
  incrementPage() {
    this.page += 1;
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  resetPage() {
    this.page = 1;
  },
};
