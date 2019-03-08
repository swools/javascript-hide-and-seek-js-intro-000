function getFirstSelector(selector) {
  document.querySelector(selector);
}

function nestedTarget() {
  document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list li')
  
  for  (let i = 0; i < lis.length; i++) {
    parseInt(lis[i]) + n;
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div')
  
  for (let i = 0; i < nodes.length; i++) {
    if(nodes.childElementCount === 0) {
      return nodes[i];
    }
  }
}


