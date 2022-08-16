import React, { PureComponent } from "react";
import Task from "./Task";
class App extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            TaskList:[
            { title: 'excercise'},
            { title: 'cooking'},
            { title: 'Reacting'},
            ]
        }
    }

    componentDidMount(){

        setInterval(() => {

            this.setState(oldState =>{
                return {TaskList : [...oldState.TaskList]}
            })
            
        }, 1000);
    }
    render(){
        console.log('taskList render called');
       return(
       <div>
       {
        this.state.TaskList.map((tak,i)=>{
            return <Task key ={i} title = {tak.title}/>
        })
       }
       </div>
       )
    }

}

export default App