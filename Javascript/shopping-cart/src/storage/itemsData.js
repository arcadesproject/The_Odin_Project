import uniqid from 'uniqid';
import blackbird from './images/blackbird.jpg';
import blue_tit from './images/blue_tit.jpg';
import chaffinch from './images/chaffinch.jpg';
import coal_tit from './images/coal_tit.jpg';
import goldcrest from './images/goldcrest.jpg';
import goldfinch from './images/goldfinch.jpg';
import great_tit from './images/great_tit.jpg';
import greenfinch from './images/greenfinch.jpg';
import jay from './images/jay.jpg';
import long_tailed_tit from './images/long_tailed_tit.jpg';
import robin from './images/robin.jpg';
import starling from './images/starling.jpg';

const itemsData = [
  { name: 'Blackbird', src: blackbird, price: 10, amount: 0, id: uniqid() },
  { name: 'Blue Tit', src: blue_tit, price: 8, amount: 0, id: uniqid() },
  { name: 'Chaffinch', src: chaffinch, price: 15, amount: 0, id: uniqid() },
  { name: 'Coal Tit', src: coal_tit, price: 12, amount: 0, id: uniqid() },
  { name: 'Goldcrest', src: goldcrest, price: 20, amount: 0, id: uniqid() },
  { name: 'Goldfinch', src: goldfinch, price: 25, amount: 0, id: uniqid() },
  { name: 'Great Tit', src: great_tit, price: 10, amount: 0, id: uniqid() },
  { name: 'Greenfinch', src: greenfinch, price: 18, amount: 0, id: uniqid() },
  { name: 'Jay', src: jay, price: 10, amount: 0, id: uniqid() },
  { name: 'Long Tailed Tit', src: long_tailed_tit, price: 10, amount: 0, id: uniqid() },
  { name: 'Robin', src: robin, price: 13, amount: 0, id: uniqid() },
  { name: 'Starling', src: starling, price: 6, amount: 0, id: uniqid() },
];

export default itemsData;
