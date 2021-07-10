const title = document.getElementsByClassName('title');
const dropdown = document.getElementsByClassName('dropdown');

function showMenu(e) {
  const { target } = e;
  const childDropdown = target.querySelector('.dropdown');
  childDropdown.style.display = 'block';
}

function hideMenu(e) {
  const { target } = e;
  const childDropdown = target.querySelector('.dropdown');
  childDropdown.style.display = 'none';
}

for (element of title) {
  element.addEventListener('mouseenter', showMenu);
  element.addEventListener('mouseleave', hideMenu);
}

function changeBackground(e) {
  const { target } = e;
  target.style.backgroundColor = 'blue';
}

function removeBackground(e) {
  const { target } = e;
  target.style.backgroundColor = 'white';
}

for (element of dropdown) {
  const children = element.children;
  for (element of children) {
    element.addEventListener('mouseenter', changeBackground);
    element.addEventListener('mouseleave', removeBackground);
  }
}
