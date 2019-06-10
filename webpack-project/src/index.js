import './styles.scss';
import Cat from './cat.jpeg';

console.log("Webpack entry point!")

function component() {
    const element = document.createElement('div');

    const myCat = new Image();
    myCat.src = Cat;

    element.appendChild(myCat);

    return element;
  }

  document.body.appendChild(component());