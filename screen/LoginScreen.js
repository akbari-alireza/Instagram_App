import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Brand from '../components/login/Brand'
import LoginForm from '../components/login/loginForm';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Brand />
                <LoginForm />
            </View>
        </View>
    )
}
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingTop: 140,
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