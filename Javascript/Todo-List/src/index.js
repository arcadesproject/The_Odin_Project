function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Testing it works'
  
    return element;
  }
  
  document.body.appendChild(component());