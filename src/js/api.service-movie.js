class ApiService {
  constructor() {}
  static BASE_URL = 'https://api.themoviedb.org/3';

  API_KEY = 'b1cca9f4ff0056a5a4eafc6c5006a5a4';
  #page = 1;
  endpoint = 'movie/upcoming';

  fetchMovies() {
    const queryParams = new URLSearchParams({
      api_key: this.API_KEY,
      page: this.#page,
    });
    return fetch(`${ApiService.BASE_URL}/${this.endpoint}?${queryParams}`).then(
      response => {
        console.log(response);
        if (response.status === 404) {
          return Promise.reject(new Error('Not found!'));
        }
        return response.json();
      }
    );
  }

  incrementPage() {
    this.#page += 1;
  }
}

export default ApiService;
