import React, { Component } from 'react';
import { Text, View, navigator } from 'react-native';
import { StackNavigator } from 'react-navigation';


import Login from './src/components/login/Login';
import Register from './src/components/register/Register';

const ScreensApp = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
});


export default ScreensApp;