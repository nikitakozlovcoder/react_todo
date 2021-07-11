import React from "react";
import styles from "./Card.module.css"


export default class Card extends React.Component{
    render() {
        return <div className={`card ${styles.card}`}>
            <div className="card-body">
                {this.props.children}
            </div>
        </div>

    }
}


