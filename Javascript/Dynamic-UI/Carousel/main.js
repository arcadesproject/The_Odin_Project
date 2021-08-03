const frame = document.getElementById('frame');
const nextArrow = document.getElementById('next');
const previousArrow = document.getElementById('previous');
const dotsContainer = document.getElementById('navDots');

nextArrow.addEventListener('click', next);
previousArrow.addEventListener('click', previous);

function next() {
  const current = getCurrentImage();
  const index = getButtonIndex();
  let nextIndex = index + 1;
  let changed = current.nextElementSibling;
  if (changed === null) {
    changed = frame.firstElementChild;
    nextIndex = 0;
  }
  hideImage(current);
  showImage(changed);
  clearRadioButton(index);
  setRadioButton(nextIndex);
}

function previous() {
  const current = getCurrentImage();
  let index = getButtonIndex();
  let previousIndex = index - 1;
  let changed = current.previousElementSibling;
  if (changed === null) {
    changed = frame.lastElementChild;
    previousIndex = frame.childElementCount - 1;
  }
  hideImage(current);
  showImage(changed);
  clearRadioButton(index);
  setRadioButton(previousIndex);
}

function selectSlide(e) {
  const { target } = e;
  const [...container] = target.parentElement.children;
  const current = getCurrentImage();
  const images = current.parentElement.children;
  const index = getButtonIndex();
  const nextIndex = container.indexOf(target);
  clearRadioButton(index);
  setRadioButton(nextIndex);
  hideImage(current);
  showImage(images[nextIndex]);
}

function clearRadioButton(index) {
  dotsContainer.children[index].checked = false;
}

function setRadioButton(index) {
  dotsContainer.children[index].checked = true;
}

function getButtonIndex() {
  const current = getCurrentImage();
  const [...parent] = frame.children;
  const index = parent.indexOf(current);
  return index;
}

function getCurrentImage() {
  const [current] = frame.getElementsByClassName('display');
  return current;
}

function hideImage(img) {
  img.classList.remove('display');
  img.classList.add('hidden');
}

function showImage(img) {
  img.classList.remove('hidden');
  img.classList.add('display');
}

(function addRadioButtons() {
  for (let i = 0; i < frame.childElementCount; i++) {
    let item = document.createElement('INPUT');
    item.setAttribute('type', 'radio');
    item.addEventListener('click', selectSlide);
    dotsContainer.appendChild(item);
  }
  const index = getButtonIndex();
  dotsContainer.children[index].checked = true;
})();

(function advance() {
  setInterval(next, 5000);
})();
