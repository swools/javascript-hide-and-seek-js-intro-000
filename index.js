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
  d
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