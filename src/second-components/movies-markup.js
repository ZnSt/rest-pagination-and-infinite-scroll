import notFoundImg from '../images/istockphoto-924949200-170667a.jpeg';

const cardSample = ` <div class="movie-card">
      <img src="" alt="" width="" height="">
      <h5></h5>
      <p></p>
    </div>`;

function makeMoviesMarkup(movies) {
  return movies
    .map(({ title, release_date, poster_path }) => {
      const year = new Date(release_date).getFullYear();
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : notFoundImg;
      return makeMovieCard({ title, year, poster });
    })
    .join('');
}

function makeMovieCard({ title, year, poster }) {
  return `<div class="movie-card">
      <img src="${poster}" alt="${title}" width="220" height="330">
      <h5>${title}</h5>
      <p>${year}</p>
        </div>`;
}

export default makeMoviesMarkup;
