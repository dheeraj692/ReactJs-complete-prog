import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return( 
            <div>
                <button onClick={this.props.decrement}>-</button>
                My counter {this.props.counter}
                <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}
export default Counter;