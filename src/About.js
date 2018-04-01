import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
class About extends Component {

    routingPage () {
        this.props.history.push('/');
    }

    routeToContact() {
        this.props.history.push('/contact/123');
    }
    
    render() {
        return(
            <div>
                Hello About 
                <button onClick={this.routingPage.bind(this)}>Home</button>
                <button onClick={this.routeToContact.bind(this)}>Contact</button>

                <ul>
                    <li><Link to='/contact/121'>121</Link></li>
                    <li><Link to='/contact/122'>122</Link></li>
                    <li><Link to='/contact/123'>123</Link></li>
                </ul>
            </div>
        )
    }
}
export default About;