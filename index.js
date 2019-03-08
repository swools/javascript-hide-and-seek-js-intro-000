function getFirstSelector(selector) {
  document.querySelector(selector);
}

function nestedTarget() {
  document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list')
}