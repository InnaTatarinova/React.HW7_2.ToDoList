import React from 'react';
import List from './List';
import NewTask from './NewTask';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksList: []
        }
        this.addIteminTask = this.addIteminTask.bind(this);
        this.deleteItemFromList = this.deleteItemFromList.bind(this);
    }

    addIteminTask(value){
        this.setState({
            tasksList: this.state.tasksList.concat(value)
        })
    }

     deleteItemFromList(id){
        this.setState({
            tasksList: this.state.tasksList.filter(item => item.id !== id)
        })
       
    }
    
    render() {
        console.log(this.state.tasksList);
        return (
           <div>
               <NewTask onAddToList={this.addIteminTask}/>
               <List list={this.state.tasksList} delItem={this.deleteItemFromList}/>
           </div>
        )
    }

}

export default ToDoList;