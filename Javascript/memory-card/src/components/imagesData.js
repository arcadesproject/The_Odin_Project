import blackbird from '../images/blackbird.jpg';
import blue_tit from '../images/blue_tit.jpg';
import chaffinch from '../images/chaffinch.jpg';
import coal_tit from '../images/coal_tit.jpg';
import goldcrest from '../images/goldcrest.jpg';
import goldfinch from '../images/goldfinch.jpg';
import great_tit from '../images/great_tit.jpg';
import greenfinch from '../images/greenfinch.jpg';
import jay from '../images/jay.jpg';
import long_tailed_tit from '../images/long_tailed_tit.jpg';
import robin from '../images/robin.jpg';
import starling from '../images/starling.jpg';
import uniqid from 'uniqid';

const images = [
  { name: 'blackbird', src: blackbird, clicked: false, id: uniqid() },
  { name: 'blue tit', src: blue_tit, clicked: false, id: uniqid() },
  { name: 'chaffinch', src: chaffinch, clicked: false, id: uniqid() },
  { name: 'coal tit ', src: coal_tit, clicked: false, id: uniqid() },
  { name: 'goldcrest', src: goldcrest, clicked: false, id: uniqid() },
  { name: 'goldfinch', src: goldfinch, clicked: false, id: uniqid() },
  { name: 'great tit', src: great_tit, clicked: false, id: uniqid() },
  { name: 'greenfinch', src: greenfinch, clicked: false, id: uniqid() },
  { name: 'jay', src: jay, clicked: false, id: uniqid() },
  { name: 'long tailed tit', src: long_tailed_tit, clicked: false, id: uniqid() },
  { name: 'robin', src: robin, clicked: false, id: uniqid() },
  { name: 'starling', src: starling, clicked: false, id: uniqid() },
];

export default images;
