import React from "react";
import NewTaskForm from "../Components/NewTaskForm";
import styles from "./NewTaskPage.module.css";

export default class NewTaskPage extends React.Component{

    render() {
        return <div className={`container`}>

            <h3 className={styles.title}>Create new task!</h3>
            <div >
                <NewTaskForm/>
            </div>

        </div>
    }
}
