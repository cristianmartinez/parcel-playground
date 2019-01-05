import module1 from './module1';
import {componentName} from '../main.css';

const component = `<div class="${componentName}">${module1()}</div>`;
document.getElementById('root').innerHTML = component;
