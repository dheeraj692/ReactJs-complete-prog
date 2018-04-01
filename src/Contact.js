import React, { Component } from 'react';

class Contact extends Component {


    
    render() {

        let users = {
            121: {
                name: 'haider',
                cell: 'xyz'
            }, 122: {
                name: 'Ali',
                cell: 'xyz'
            }, 123: {
                name: 'haider',
                cell: 'abc'
            }
        }
        let reqUser = users[this.props.match.params.id];
        return(
            <div>
                Hello Contact:
                {this.props.match.params.id}<br/>
                {reqUser.name}<br/>
                {reqUser.cell}
            </div>
        )
    }
}
export default Contact;