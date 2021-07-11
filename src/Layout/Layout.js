import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

export default class AllTasksPage extends React.Component{
    render() {
        return <main className={styles.main}>
            <Header/>
            {this.props.children}

            <Footer/>
        </main>

    }
}
