import React, { Component } from 'react';
import { StyleSheet, Text, View, navigator, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import firebaseRef from '../../services/firebase';

class Home extends Component {
    static navigationOptions = {
        header: false,
    }
    constructor(props) {
        super(props)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.buttonContainer} onPress={()=>this._SignOutLogin({navigate})}>
                        <Text style={styles.button}>cerrar sesion</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }

    _SignOutLogin(navigate) {
        var nav = navigate.navigate;
        firebaseRef.auth().signOut().then(function () {
            // Sign-out successful.
            console.log('deslogueo');
            nav('Login');

        }).catch(function (error) {
            console.log('error');
            // An error happened.
        });
    }
}

const styles = StyleSheet.create({
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


export default Home;
