import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import CustomeRoutes from './Routes';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CustomeRoutes/>, document.getElementById('root'));
registerServiceWorker();
