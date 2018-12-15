import _ from 'lodash';
import '../css/style.scss';
import People from "./class/people.js"
// import imgObj from './src/img/8.png';

let p = new People();
p.say()
p.say()
p.say()

//  if (module.hot) {
//     module.hot.accept('./src/js/class/people.js', function() {
//         console.log('rrrrrr!');
//         printMe();
//     })
// }