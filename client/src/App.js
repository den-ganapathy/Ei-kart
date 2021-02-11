import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./utils/Header.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "./actions/products";
// import { ThemeProvider } from "styled-components";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" exact component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
