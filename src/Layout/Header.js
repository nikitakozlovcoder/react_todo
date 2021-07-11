import React from "react";
import {Link} from "react-router-dom";


export default class AllTasksPage extends React.Component{
    render() {
        return <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to='/'>ToDOs</Link>


            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>All</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/new'>New</Link>
                    </li>

                </ul>
            </div>
            </div>
        </nav>

    }
}
