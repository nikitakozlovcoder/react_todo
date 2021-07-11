import React from "react";
import styles from "./Footer.module.css";

export default class Footer extends React.Component{
    render() {
        return <footer className={`container ${styles.footer}`}>
            <hr/>
            @ToDos App 2021
        </footer>

    }
}


