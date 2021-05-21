import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound.jsx";
import Home from "../containers/Home";
import Layout from "../components/Layout.jsx";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
