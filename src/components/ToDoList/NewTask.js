import React from 'react';
import Icon from './Icon';
import { v4 } from 'uuid';

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addToList = this.addToList.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }
    addToList(e) {
        e.preventDefault();
       
        if (this.state.value) {
            this.props.onAddToList({
                id: v4(),
                value: this.state.value
            })

            this.setState({
                value: ""
            })
        }

    }

    render() {
        return (
            <form onSubmit={this.addToList}>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                <button> 
                    <Icon type="plus"/>
                </button>
            </form>
        )
    }

}

export default NewTask;