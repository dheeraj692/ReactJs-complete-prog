import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            allUsers: [],
            radioGroup: {
                MEANStack: false,
                MERNStack: true,
                LAMPStack: false
            },
            checkboxGroup: {
                mongodb: false,
                react: true,
                express: false
            },
            flavor: ""
        }
        this.usernameChangeFn = this.usernameChangeFn.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.flavorChange = this.flavorChange.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
    }

    usernameChangeFn(e) {
        this.setState({
            username: e.target.value
        })
    }

    clickHandler(e) {
        let currUser = this.state.allUsers;
        currUser.push(this.state.username);
        this.setState({
            allUsers: currUser,
            username: '',
        })
        console.log(this.state.allUsers)
    }

    radioHandler(e) {
        let currRadioGroup = this.state.radioGroup;
        for(var key in currRadioGroup) {
            currRadioGroup[key] = false;
        }
        currRadioGroup[e.target.value] = e.target.checked;
        this.setState({
            radioGroup: currRadioGroup
        })
    }

    checkboxHandler(e) {
        let currCheckboxGroup = this.state.checkboxGroup;
        currCheckboxGroup[e.target.value] = e.target.checked;
        this.setState({
            checkboxGroup: currCheckboxGroup
        })
    }
    
    flavorChange(e) {
        this.setState({
            flavor: e.target.value
        })
    }

    emailHandler(e) {
        console.log(this.refs.subscriberEmail.value);
    }

    render() {
        return (
            <div>
                <h3>Hello Forms</h3>
                <input type="text"  name="username" value={this.state.username} onChange={this.usernameChangeFn}/>
                <button onClick={this.clickHandler}>Save User</button>
                <p>{this.state.username}</p> 

                Developer's category:<br/>
                <label>
                    MEAN stack <input type="radio" name="devcategory" value="MEANStack" checked={this.state.radioGroup.MEANStack} onChange={this.radioHandler}/>
                </label><br/>
                <label>
                    MERN stack <input type="radio" name="devcategory" value="MERNStack" checked={this.state.radioGroup.MERNStack} onChange={this.radioHandler}/>
                </label><br/>
                <label>
                    LAMP stack <input type="radio" name="devcategory" value="LAMPStack" checked={this.state.radioGroup.LAMPStack} onChange={this.radioHandler}/>
                </label><br/>
                <br/>
                Technologies:<br/>
                <label>
                    MongoDB <input type="checkbox" name="tech" value="mongodb" checked={this.state.checkboxGroup.mongodb} onChange={this.checkboxHandler}/>
                </label><br/>
                <label>
                    React <input type="checkbox" name="tech" value="react" checked={this.state.checkboxGroup.react} onChange={this.checkboxHandler}/>
                </label><br/>
                <label>
                    Express <input type="checkbox" name="tech" value="express" checked={this.state.checkboxGroup.express} onChange={this.checkboxHandler}/>
                </label><br/>
                <br/>
                <label>
                Pick your favorite La Croix flavor:
                <select value={this.state.flavor} onChange={this.flavorChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label><br/>

                <label>Email: <input type="email" ref="subscriberEmail"/></label>
                <button onClick={this.emailHandler}>Subscribe</button>
            </div>
        )
    }
}

export default Forms;