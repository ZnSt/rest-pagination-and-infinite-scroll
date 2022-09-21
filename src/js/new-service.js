const API_KEY = '3c26f51b8e414a56927cf275d2f0a01e';

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(this);
    const options = {
      headers: {
        Authorization: API_KEY,
      },
    };
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options).then(response =>
      response.json().then(data => {
        console.log(data);
        this.incrementPage();
        return data.articles;
      })
    );
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.query;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
