import React, { Component } from 'react';
import { StyleSheet, Text, View, navigator, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebaseRef from '../../services/firebase';

class Register extends Component {

    static navigationOptions = {
        title: 'Crear nueva cuenta',
        headerStyle: { backgroundColor: '#337FB0' },
        headerTitleStyle: { color: '#FFF', opacity: 0.7, fontSize: 20 },

    }

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            passwordVeryInput: ''
        }

        this._register = this._register.bind(this)

    }

    _register() {
        // quita espacion email   
        var email = this.state.email.replace(" ", "");
        this.state.email = email;
        if (this.state.password == this.state.passwordVeryInput) {
            firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
                // Handle Errors here.
                console.log(error.code);
                console.log(error.message);
                if (error.code == 'auth/invalid-email') {
                    Alert.alert('Mensaje:', 'Formato de correo electrónico invalido', [{ text: 'Confirmar' },]);
                } else if (error.code == 'auth/wrong-password') {
                    Alert.alert('Mensaje:', 'La contraseña no es válida o el usuario no tiene una contraseña', [{ text: 'Confirmar' },]);
                } else if (error.code == 'auth/weak-password') {
                    Alert.alert('Mensaje:', 'La contraseña debe tener al menos 6 caracteres', [{ text: 'Confirmar' },]);
                }else if (error.code == 'auth/email-already-in-use') {
                    Alert.alert('Mensaje:', 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta', [{ text: 'Confirmar' },]);
                }


                

            });
        } else {
            Alert.alert('Mensaje:', 'Las contraseñas no coinciden por favor verifique', [{ text: 'Confirmar' },]);
        }

    }


    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.title}>Datos básicos</Text>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder="Correo electrónico"
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        underlineColorAndroid='transparent'
                        returnKeyType='next'
                        ref={(input) => this.email = input}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input} />
                    <TextInput
                        placeholder="Contraseña"
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        returnKeyType='next'
                        ref={(input) => this.passwordInput = input}
                        onSubmitEditing={() => this.passwordVeryInput.focus()}
                        style={styles.input} />
                    <TextInput
                        placeholder="Confirmar contraseña"
                        onChangeText={(text) => this.setState({ passwordVeryInput: text })}
                        value={this.state.passwordVeryInput}
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        returnKeyType='go'
                        ref={(input) => this.passwordVeryInput = input}
                        style={styles.input} />

                    <TouchableOpacity
                        style={styles.buttonContainer} onPress={this._register}>
                        <Text style={styles.button}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default Register;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    title: {
        color: '#FFF',
        marginTop: 20,
        textAlign: 'center',
        opacity: 0.7,
        fontSize: 20,
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