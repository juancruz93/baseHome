import React, { Component } from 'react';
import { Text, View, navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/pages/login/Login';
import Register from './src/pages/register/Register';
import Home from './src/pages/home/Home';

const ScreensApp = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Home: { screen: Home }
});


export default ScreensApp;