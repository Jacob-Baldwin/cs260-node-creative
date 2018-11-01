import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';

import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <Header/>
    <Main/>
  </div>
)

export default App;
