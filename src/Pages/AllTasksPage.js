import React, {useEffect, useState} from "react";
import HttpHelper from "../Helpers/HttpHelper";
import Task from "../Components/Task";
import Popup from "../Ui/Popup";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, setTasks} from "../Store/TasksSlice";


const AllTasksPage = (props)=>{

    const api = new HttpHelper('http://localhost:3000/');
    const tasks = useSelector(state=>state.tasks);
    const dispatcher = useDispatch();
    let [taskToDelete, setTaskToDelete] = useState({});
    let [shouldShowModal, setShouldShowModal] = useState(false);

    useEffect (()=>{
        api.getTasks().then((data)=>{
            dispatcher(setTasks(data));

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


   const deleteDialog = (taskToDelete)=>{
       setShouldShowModal(true);
       setTaskToDelete(taskToDelete);

    };

   const OnNoClick = () =>{
        setShouldShowModal(false);
   };

   const onYesClick = () => {
       dispatcher(deleteTask(taskToDelete));
       setShouldShowModal(false);
    };
    return (
         <div className={'container'}>

            <Popup onNoClick={OnNoClick}
                   onYesClick={onYesClick}
                   shouldShow={shouldShowModal}
                   title={"Delete task?"} body={`You are going to delete task "${taskToDelete?.title}"`}
            />
            {tasks.map((task)=>{
               return <Task taskData={task} key={task.id} onClick={deleteDialog}/>

            })}
        </div> )
};

export default AllTasksPage;
