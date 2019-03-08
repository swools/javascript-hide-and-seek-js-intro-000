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
    if(nodes.firstElementChild) {
      return nodes[i];
    }
  }
  
  
}


      <div id="grand-node">
        <div>
          <div>
            <div>
              <div>
                boo!
              </div>
            </div>
          </div>
        </div>
      </div>