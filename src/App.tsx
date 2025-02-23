import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Home } from './pages'
import Page404 from './pages/Page404'

import './App.css';

import user from './reduceurs/user.reduceur'

const store = configureStore({ reducer: combineReducers({ user }) });


function App() {
  document.title = "Viacheslav ZAITCEV Développeur d'application"
  return (
    <Provider store={store}>


      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Page404 />} path="*" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
