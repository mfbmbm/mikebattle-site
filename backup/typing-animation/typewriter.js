// Types out every element marked data-type, one after another.
// data-type="instant" elements simply appear in their turn.
// A Skip button fades in below the text as it types; clicking it finishes everything at once.
(function () {
  var CHAR_SPEED = 28; // milliseconds per character. Lower = faster.
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-type]'));
  if (!els.length) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    els.forEach(function (el) { el.classList.add('done'); });
    return;
  }

  var originals = els.map(function (el) { return el.innerHTML; });
  var run = 0;
  var id = ++run;
  var timer;

  var skip = document.createElement('button');
  skip.type = 'button';
  skip.className = 'skip';
  skip.textContent = 'Skip';
  els[0].after(skip);

  function hideSkip() {
    skip.classList.remove('show');
    clearTimeout(timer);
    timer = setTimeout(function () { skip.hidden = true; }, 700);
  }
  timer = setTimeout(function () { skip.classList.add('show'); }, 900);

  skip.addEventListener('click', function () {
    run++; // stops any typing in progress
    els.forEach(function (el, i) {
      el.innerHTML = originals[i];
      el.classList.remove('typing');
      el.classList.add('done');
    });
    hideSkip();
  });

  function plainText(el) {
    var text = '';
    el.childNodes.forEach(function (node) {
      if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
      else if (node.tagName === 'BR') text += '\n';
      else text += node.textContent;
    });
    return text;
  }

  function typeOne(el, i, done) {
    if (el.dataset.type === 'instant') {
      el.classList.add('done');
      done();
      return;
    }
    var full = plainText(el);
    el.innerHTML = '';
    el.classList.add('typing');
    var cursor = document.createElement('span');
    cursor.className = 'cursor';
    var node = document.createTextNode('');
    el.appendChild(node);
    el.appendChild(cursor);
    var n = 0;
    (function tick() {
      if (id !== run) return;
      if (n < full.length) {
        node.textContent += full[n++];
        skip.scrollIntoView({ block: 'nearest' });
        setTimeout(tick, CHAR_SPEED);
      } else {
        el.innerHTML = originals[i]; // puts links and bold back
        el.classList.remove('typing');
        el.classList.add('done');
        done();
      }
    })();
  }

  var index = 0;
  function next() {
    if (id !== run) return;
    if (index >= els.length) { hideSkip(); return; }
    var i = index++;
    if (els[i].dataset.type !== 'instant') els[i].after(skip); // button trails the text
    setTimeout(function () {
      if (id === run) typeOne(els[i], i, next);
    }, 120);
  }
  setTimeout(next, 200);
})();
