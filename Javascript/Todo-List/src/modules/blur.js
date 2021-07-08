function blur() {
  // change layer on top of background
  const layer = document.getElementById('blur');
  layer.style.display = 'block';
}

function noBlur() {
  const layer = document.getElementById('blur');
  layer.style.display = 'none';
}

export { blur, noBlur };
