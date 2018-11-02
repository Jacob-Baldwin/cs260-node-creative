import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './Components/Main';
import Header from './Components/Header';

import styles from './App.css';
import { Route } from 'react-router-dom'

const App = () => (
  <div className="App">
    <Header/>
    <Main/>
  </div>
)

export default App;
