import React from "react";
import Card from "../Ui/Card";



export default class Task extends React.Component{
    render() {
        return <Card>
                <h5 className="card-title">{this.props.taskData.title}</h5>
            { /*<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>*/}
                <p className="card-text">{this.props.taskData.body}</p>
                <button type="button" className="btn btn-outline-danger"
                        onClick={()=>{this.props.onClick(this.props.taskData)}}>Delete</button>
            </Card>

    }
}


