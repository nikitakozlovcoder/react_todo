import React from "react";
import styles from "./Popup.module.css"



export default class Popup extends React.Component{
    constructor(props)
    {
        super(props);
        this.animate = false;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.shouldShow)
            this.animate = true;

    }

    render() {
        return   <div className={`modal ${ this.props.shouldShow ? styles.show : (this.animate ? styles.hide : '')}`} tabIndex="-1" role="dialog">

            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.title}</h5>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.body}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.props.onYesClick}>Yes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onNoClick}>No</button>
                    </div>
                </div>
            </div>
        </div>


    }
}


