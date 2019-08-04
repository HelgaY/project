import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {Registration} from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Registration />, document.getElementById('root'));

serviceWorker.unregister();
