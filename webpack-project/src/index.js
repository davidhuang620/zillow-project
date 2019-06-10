import './styles.scss';
import Cat from './cat.jpeg';
import Owl from './owl.svg';

console.log("Webpack entry point!")

function component() {
    const element = document.createElement('div');

    const myCat = new Image();
    myCat.src = Cat;
    element.appendChild(myCat);

    const myOwl = new Image();
    myOwl.src = Owl;
    element.appendChild(myOwl);

    return element;
  }

  document.body.appendChild(component());