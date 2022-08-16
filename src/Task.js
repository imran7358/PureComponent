import React, { PureComponent } from "react";
class Task extends PureComponent{
    render(){
        console.log('task added');
        return <h1>{this.props.title}</h1>
    }
}
export default Task