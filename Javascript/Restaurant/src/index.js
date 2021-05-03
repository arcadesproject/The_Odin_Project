import navbar from './modules/navbar'
import home from './modules/home'
import contact from './modules/contact'
import menu from './modules/menu'

const content = document.getElementById('content');

(function component() {
  content.append(navbar(), home())
})();

function switchContent({target}) {
  content.removeChild(content.lastChild)
  switch (target.id) {
    case 'home-nav':
      content.appendChild(home())
      break;
    case 'menu-nav':
      content.appendChild(menu())
      break;
    case 'contact-nav':
      content.appendChild(contact())
      break
  }
}

const homeBtn = document.getElementById('home-nav')
const menuBtn = document.getElementById('menu-nav')
const contactBtn = document.getElementById('contact-nav')
homeBtn.addEventListener('click', switchContent)
menuBtn.addEventListener('click', switchContent)
contactBtn.addEventListener('click', switchContent)