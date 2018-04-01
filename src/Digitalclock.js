import React, { Component } from 'react';
import Showclock from './Showclock';
import Analogclock from './Analogclock';
import Logger from './Logger';

class Digitalclock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString(),
            counter: 0
        }
        this.updateTime();
    }

    updateTime() {
        setInterval(()=>{
            this.setState({
                currentTime: new Date().toLocaleString(),
                counter: this.state.counter + 1
            });
        }, 1000)
    }

    render(){
        return(
            //<h1>{this.state.currentTime}</h1>
            //Above line is replaced to give example of stateless component below
            <div>
            <Showclock time={this.state.currentTime}/> 
            <Analogclock time={this.state.currentTime}/>
            {
                (this.state.counter<3) ?
                (<Logger time={this.state.currentTime}/>) :
                (<div></div>)
            }
            
            </div>
        )
    }
}
export default Digitalclock;