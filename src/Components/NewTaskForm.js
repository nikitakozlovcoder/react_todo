import React, {useState} from "react";
import handleInputChange from "../Helpers/handleInputChange";
import {useDispatch} from "react-redux";
import {addTask} from "../Store/TasksSlice";


const NewTaskForm = () =>{

    let [newTask, setNewTask] = useState({title: '', body: ''});
    const dispatcher = useDispatch();
    function handleChange(e) {
        handleInputChange(e, setNewTask, newTask);
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatcher(addTask(newTask));
        setNewTask({title: '', body: ''});
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Task title</label>
                <input type="text" className="form-control"
                       placeholder="Enter title" name="title" value={newTask.title} onChange={handleChange} required/>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="body">Task`s body</label>
                <textarea value={newTask.body} name="body" className="form-control" rows="3" onChange={handleChange} required/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default NewTaskForm;
