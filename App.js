/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar} from 'react-native';
import Home from "./Home";

const App = () => {
 
  return (
     <>
      <StatusBar barStyle='light-content'  />
      <Home/>
    </>
  );
};



export default App;
