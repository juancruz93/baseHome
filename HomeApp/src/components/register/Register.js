import React, { Component } from 'react';
import { StyleSheet, Text, View, navigator, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

class Register extends Component {

    static navigationOptions = {
        title: 'Registro',
        headerStyle: { backgroundColor: '#337FB0' },
        headerTitleStyle: { color: '#FFF', opacity: 0.7, fontSize: 20 },

    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.title}>Datos básicos</Text>
                <View style={styles.formContainer}>                   
                    <TextInput
                        placeholder="Correo electrónico"
                        underlineColorAndroid='transparent'
                        returnKeyType='next'
                        ref={(input) => this.email = input}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        style={styles.input} />
                    <TextInput
                        placeholder="Contraseña"
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        returnKeyType='next'
                        ref={(input) => this.passwordInput = input}
                        style={styles.input} />

                    <TouchableOpacity
                        style={styles.buttonContainer}>
                        <Text style={styles.button}>Registrar</Text>
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