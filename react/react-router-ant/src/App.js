import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Layout from './page/Layout';
import logo from './logo.svg';
import 'antd/dist/antd.css'
// import './App.css';
function Table () {
  return (
    <div>table</div>
  )
}
function Label () {
  return (
    <div>label</div>
  )
}
function App() {
  return (
    <Router>
        {/*  */}
        <Route  path="/" component={Layout}></Route>
        {/* <Route  path="/table" component={Table}></Route>
        <Route  path="/label" component={Label}></Route> */}
        
    </Router>
  );
}

export default App;
