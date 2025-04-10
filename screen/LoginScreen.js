import { Text, StyleSheet, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
import LoginForm from '../components/login/loginForm';

const { width, height } = Dimensions.get("window");
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <LoginForm />
            </View>
        </View>
    )
}
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        // paddingTop: 140,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    content: {
        width: "95%",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
})