import { Pressable, StyleSheet, Text, TextInput, View, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";

const { width, height } = Dimensions.get("window");
const LoginForm = () => {
    const navigation = useNavigation();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            navigation.replace("Application");
        },
    })
    return (
        <View style={styles.wrapper}>
            {/* login */}
            <View style={styles.login}>
                <View style={{ marginBottom: 30 }} >
                    <Image
                        style={{
                            width: 75,
                            height: 75,
                            alignSelf: "center",}}
                        source={require("../../assets/instagram-log.jpg")} />

                </View>
                <View style={styles.inputField}>
                    <TextInput
                        placeholder="Phone number, username or email"
                        placeholderTextColor='#444'
                        textContentType="emailAddress"
                        autoFocus={true}
                        autoCapitalize="none"
                        value={formik.values.email}
                        onChangeText={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                    />
                </View>

                {formik.touched.email && formik.errors.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>{formik.errors.email}</Text>
                )}

                <View style={styles.inputField}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor='#444'
                        textContentType="password"
                        secureTextEntry={true}
                        autoCorrect={false}
                        value={formik.values.password}
                        onChangeText={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                    />

                </View>

                {formik.touched.email && formik.errors.email && (
                    <Text style={{ fontSize: 10, color: "red" }}>{formik.errors.password}</Text>
                )}

                <Pressable style={styles.button} onPress={formik.handleSubmit}>
                    <Text style={styles.buttonText}>Log in</Text>
                </Pressable>
                <Pressable style={styles.forgot} >
                    <Text style={styles.forgotPasswor}>Forgot password ?</Text>
                </Pressable>
            </View>
            {/* footer */}
            <View style={styles.footerMeta}>
                <Pressable style={styles.create} onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.creatAccount}>Don't have an account ?</Text>
                </Pressable>
                <View>
                    <Image
                        style={styles.logo}
                        source={require("../../assets/meta.png")}

                    />
                </View>
            </View>
        </View>
    );
}
export default LoginForm;
const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: height+250,
        padding: 10,
        paddingTop: 40,
        position: "relative",
        alignItems: "center",
        justifyContent: "space-around",
    },
    login: {
        width: "100%",
    },
    inputField: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 15,
        padding: 13,
        paddingVertical: 15,
        marginBottom: 15,
    },
    button: {
        backgroundColor: "#067fff",
        borderRadius: 50,
        padding: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    forgot: {
        marginTop: 20,
        alignSelf: "center",
    },
    forgotPasswor: {
        fontWeight: '600'
    },
    footerMeta: {
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
    },
    create: {
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#067fff",
        borderRadius: 50,
        padding: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    creatAccount: {
        fontWeight: '600',
        color: "#067fff",
    },
    logo: {
        width: 75,
        height: 75,
        alignSelf: "center",
    },
})