import React, { Component } from 'react';

class Logger extends Component {
    constructor(props) {
        super(props);
        console.log('constructor running');
    }

    componentWillMount() {
        console.log('componentWillMount method');
    }

    componentDidMount() {
        console.log('componentDidMount method');
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillRecieveProps method: ', newProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate method: ', nextProps, ' ', nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate method: ', nextProps, ' ', nextState);
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate method: ', oldProps, ' ', oldState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount method');
    }

    render() {
        console.log('render method');
        return(
            <h1>{this.props.time}</h1>
        )
    }
}
export default Logger;