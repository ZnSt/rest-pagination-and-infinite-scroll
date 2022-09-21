import ApiService from './api.service-movie';
import refs from './refs';
import makeMoviesMarkup from '../second-components/movies-markup';
import '../css/films-gallery.css';
import Notiflix from 'notiflix';
import LoadMoreBtn from '../components/load-more-films';

const api = new ApiService();
const loadMoreBtn = new LoadMoreBtn({ selector: '.btn-primary', hidden: true });
console.log(loadMoreBtn);
function getMovies() {
  // refs.loadMoreBtn.disabled = true;
  api
    .fetchMovies()
    .then(data => {
      renderMovies(data.results);
      // refs.loadMoreBtn.classList.remove('is-hidden');
      // refs.loadMoreBtn.disabled = false;

      if (data.page >= data.total_pages) {
        // refs.loadMoreBtn.classList.add('is-hidden');
        setTimeout(() => {
          Notiflix.Notify.info('This is the last pages!');
        }, 500);
      }
    })
    .catch(handleError);
}

getMovies();
function renderMovies(movies) {
  const markup = makeMoviesMarkup(movies);
  refs.output.insertAdjacentHTML('beforeend', markup);
}

// refs.loadMoreBtn.addEventListener('click', onLoadMore);
// function onLoadMore() {
//   api.incrementPage();
//   getMovies();
// }

function handleError(error) {
  refs.output.innerHTML = '';
  refs.loadMoreBtn.classList.add('.is-hidden');
  refs.error.textContent = error.message;
}
