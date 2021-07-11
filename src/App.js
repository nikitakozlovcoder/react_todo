
import 'bootstrap/dist/css/bootstrap.css';
import AllTasksPage from "./Pages/AllTasksPage";
import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import NewTaskPage from "./Pages/NewTaskPage";
import Layout from "./Layout/Layout";

function App() {
  return (

        <Layout>

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <AllTasksPage/>
            </Route>
            <Route path="/new">
              <NewTaskPage/>
            </Route>
          </Switch>
        </Layout>

  );
}

export default App;
