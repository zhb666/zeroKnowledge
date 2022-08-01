import React, { useState } from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { BackTop } from "antd";

import Header from "../src/components/Header";
import Home from "./page/home/index";
import Details from "./page/details/index";

import "./App.css";
import "antd/dist/antd.css";
import "../src/assets/css/animate.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main_content" id="main_content">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/details" exact component={Details}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      <footer>© Nervos</footer>
      <BackTop />
    </div>
  );
}

export default App;
