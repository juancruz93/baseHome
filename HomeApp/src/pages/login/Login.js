import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Alert, Navigator } from 'react-native';
import firebaseRef from '../../services/firebase';

export default class Login extends Component {
 
  static navigationOptions = {
    header: false,
  }
  
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this._login = this._login.bind(this)
    this._loginUser()

  }

  _login() {   

    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      if (error.code == 'auth/invalid-email') {
        Alert.alert('Mensaje:', 'Formato de correo electrónico invalido', [{ text: 'Confirmar' },]);
      } else if (error.code == 'auth/user-not-found') {
        Alert.alert('Mensaje:', 'El correo electrónico no se encuentra registrado en el sistema', [{ text: 'Confirmar' },]);
      } else if (error.code == 'auth/wrong-password') {
        Alert.alert('Mensaje:', 'La contraseña no es válida o el usuario no tiene una contraseña', [{ text: 'Confirmar' },]);
      }

    });

    this._loginUser();

  }

  _loginUser() {  
    const { navigate } = this.props.navigation;  
    firebaseRef.auth().onAuthStateChanged(function (user) {
      if (user) {        
        navigate('Home')
        console.log('usuario logueado.')
      } else {
        console.log('usuario no logueado.')
      }
    });
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
          <Text style={styles.title}>Aplicación</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Correo electrónico"
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
            underlineColorAndroid='transparent'
            returnKeyType='next'
            onSubmitEditing={() => this.passwordInput.focus()}
            style={styles.input} />
          <TextInput
            placeholder="Contraseña"
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
            secureTextEntry
            underlineColorAndroid='transparent'
            returnKeyType='go'
            ref={(input) => this.passwordInput = input}
            style={styles.input} />

          <TouchableOpacity
            style={styles.buttonContainer} onPress={this._login}>
            <Text style={styles.button}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={styles.buttonContainer}>
            <Text style={styles.button}>No tienes cuenta?</Text>
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
