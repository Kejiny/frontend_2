import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Payment } from '@material-ui/icons';
import Payments from './components/Payments';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// ReactDOM.render(<Payments />, document.getElementById('root'));
// registerServiceWorker();