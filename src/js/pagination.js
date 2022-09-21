import '../css/pagination.css';

const prevBtn = document.querySelector('#prev-button');
const nextBtn = document.querySelector('#next-button');
const paginationNumbers = document.querySelector('#pagination-numbers');
const paginationList = document.querySelector('#paginated-list');
const listItems = paginationList.querySelectorAll('li');

let currentPage;
const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);

function appendPageNumber(index) {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.setAttribute('page-index', index);
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('arial-label', 'page' + index);
  paginationNumbers.appendChild(pageNumber);
}

function getPaginationNumbers() {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
}

window.addEventListener('load', () => {
  getPaginationNumbers();
  setCurrentPage(1);
  document.querySelectorAll('.pagination-number').forEach(btn => {
    const pageIndex = Number(btn.getAttribute('page-index'));
    if (pageIndex) {
      btn.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
  prevBtn.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });

  nextBtn.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });
});

function setCurrentPage(numberPage) {
  currentPage = numberPage;
  const prevRange = (numberPage - 1) * paginationLimit;
  const currentRange = numberPage * paginationLimit;

  addActivePageNumber();
  handlePageBtnStatus();

  listItems.forEach((item, index) => {
    item.classList.add('hidden');
    if (index >= prevRange && index < currentRange) {
      item.classList.remove('hidden');
    }
  });
}

function addActivePageNumber() {
  document.querySelectorAll('.pagination-number').forEach(btn => {
    const pageIndex = Number(btn.getAttribute('page-index'));
    btn.classList.remove('active');

    if (pageIndex === currentPage) {
      btn.classList.add('active');
    }
  });
}

function disabledBtn(btn) {
  btn.setAttribute('disabled', true);
}

function anableBtn(btn) {
  btn.removeAttribute('disabled');
}

function handlePageBtnStatus() {
  if (currentPage === 1) {
    disabledBtn(prevBtn);
  } else {
    anableBtn(prevBtn);
  }

  if (currentPage === pageCount) {
    disabledBtn(nextBtn);
  } else {
    anableBtn(nextBtn);
  }
}
