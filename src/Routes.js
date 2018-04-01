import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom';
import App from './App';
import About from './About';
import Navbar from './Navbar';
import createBrowserHistory from 'history/createBrowserHistory';
import Contact from './Contact';

const customeHistory = createBrowserHistory();

const CustomeRoutes = () => (
    <Router history={customeHistory}>
        <div>
            <Navbar/><hr/>

            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/contact/:id" component={Contact}/>
        </div>
    </Router>

)

export default CustomeRoutes;