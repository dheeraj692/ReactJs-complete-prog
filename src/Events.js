import React, { Component } from 'react';
import Counter from './Counter';

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }
    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrementCounter() {
        if(this.state.counter>0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    render(){
        return( 
            <div>
                {/* <h1>Events</h1>
                <span>{this.state.counter}</span>
                <button onClick={this.incrementCounter.bind(this)}>+</button>
                <button onClick={this.incrementCounter}>+</button> */}
                <Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter}/>
            </div>
        )
    }
}
export default Events;