import articlesTpl from './templates/arcticles.hbs';
import NewApiService from './js/new-service';
import './css/common.css';
import Notiflix from 'notiflix';
import LoadMoreBtn from './components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
console.log(loadMoreBtn);
const newsApiService = new NewApiService();
loadMoreBtn.enable();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();
  newsApiService.query = event.currentTarget.elements.query.value;
  //   if (newsApiService.query === '') {
  //     return alert('Введи что-нибудь нормальное');
  //   }
  loadMoreBtn.show();
  newsApiService.resetPage();
  clearArticleContainer();
  fetchArticles();
}

function onLoadMore() {
  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();

  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticleContainer() {
  refs.articlesContainer.innerHTML = '';
}
