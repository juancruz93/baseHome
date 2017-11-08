import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Alert, Navigator } from 'react-native';
import Home from '../home/Home';

export default class Login extends Component {
  static navigationOptions = {
    header: false,
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/logo.png')} />
          <Text style={styles.title}>Aplicación de Prueba</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Usuario"
            underlineColorAndroid='transparent'
            returnKeyType='next'
            onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input} />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            underlineColorAndroid='transparent'
            returnKeyType='go'
            ref={(input) => this.passwordInput = input}
            style={styles.input} />

          <TouchableOpacity
            style={styles.buttonContainer}>
            <Text style={styles.button}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={styles.buttonContainer}>
            <Text style={styles.button}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    color: '#FFF',
    marginTop: 20,
    textAlign: 'center',
    opacity: 0.7,
    fontSize: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  formContainer: {
    padding: 30,
  },
  input: {
    backgroundColor: '#337FB0',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 4,
    height: 50,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 4,
    marginTop: 5,
  },
  button: {
    textAlign: 'center',
    color: '#FFF',
  },
});
