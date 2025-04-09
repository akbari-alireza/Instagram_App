import React, { useRef } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Animated, PanResponder, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const pan = useRef(new Animated.Value(500)).current;
    const navigation = useNavigation();

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return gestureState.dy > 10;
            },
            onPanResponderMove: Animated.event([null, { dy: pan }], { useNativeDriver: false }),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 100) {
                    Animated.timing(pan, {
                        toValue: 500,
                        duration: 300,
                        useNativeDriver: false,
                    }).start();
                } else {
                    Animated.timing(pan, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    const showBottomSheet = () => {
        Animated.timing(pan, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header onPressUsername={showBottomSheet} />
                <ProfileHeader />
                <Posts />
            </ScrollView>
            <Animated.View
                {...panResponder.panHandlers}
                style={[
                    styles.commentSheet,
                    {
                        transform: [{ translateY: pan }],
                    },
                ]}
            >
                <View style={styles.handle} />
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>


            </Animated.View>
        </View>
    );
};

const Header = ({ onPressUsername }) => {
    return (
        <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={onPressUsername} style={{ flexDirection: 'row', gap: 5 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>alirezaakbari.cs</Text>
                <FontAwesome name="angle-down" size={26} color="black" />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 20 }}>
                <FontAwesome name="plus-square-o" size={26} color="black" />
                <Feather name="menu" size={26} color="black" />
            </View>
        </View>
    );
};

const ProfileHeader = () => {
    return (
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
            {/* profile */}
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image
                        source={require('../assets/alirezaakbari.jpg')}
                        style={{ width: 90, height: 90, borderRadius: 50 }}
                    />
                    <View>
                        <AntDesign name="pluscircle" size={24} color="black" style={{ position: 'absolute', bottom: -1, right: -5, backgroundColor: "white", padding: 4, borderRadius: 50 }} />
                    </View>
                </View>
                <View style={{ marginLeft: 25 }}>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Ali Reza Akbari <MaterialIcons name="verified" size={18} color="dodgerblue" /></Text>
                        <Text style={{ fontSize: 15, color: 'gray' }}>he/him/his</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, gap: 15 }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '600' }}>6</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500' }}>posts</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '600' }}>8873</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500' }}>followers</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '600' }}>10</Text>
                            <Text style={{ fontSize: 15, fontWeight: '500' }}>following</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* bio */}
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 15, color: "gray" }}>Web Designer</Text>
                <Text style={{ fontSize: 15 }}>
                    Ali Reza Akbari | Ara 💻 Web Developer | 🎨 UI&UX Designer 📌 Passionate about modern technology 📍 Kabul, Afghanistan 🇦🇫
                </Text>
            </View>
            {/* edit profile */}
            <View style={{ marginTop: 20, flexDirection: 'row', gap: 10, justifyContent: 'space-between' }}>
                <View style={{ paddingVertical: 7, paddingHorizontal: 20, borderRadius: 5, borderWidth: 1, width: "50%", alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>Edit Profile</Text>
                </View>
                <View style={{ paddingVertical: 7, paddingHorizontal: 20, borderRadius: 5, borderWidth: 1, width: "50%", alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>Share Profile</Text>
                </View>
            </View>
            {/* story */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 25 }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={{ alignItems: 'center', gap: 5 }}>
                        <View style={{ borderColor: "lightgray", borderWidth: 4, width: 80, height: 80, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <Feather name="plus" size={30} color="black" />
                        </View>
                        <Text>New</Text>
                    </View>
                    <View style={{ alignItems: 'center', gap: 5 }}>
                        <Image style={{ borderColor: "lightgray", borderWidth: 4, width: 80, height: 80, borderRadius: 50 }} source={require('../assets/alirezaakbari.jpg')} />
                        <Text>Me🧔</Text>
                    </View>
                    <View style={{ alignItems: 'center', gap: 5 }}>
                        <Image style={{ borderColor: "lightgray", borderWidth: 4, width: 80, height: 80, borderRadius: 50 }} source={require('../assets/alirezaakbari3.jpg')} />
                        <Text>Gym💪</Text>
                    </View>
                    <View style={{ alignItems: 'center', gap: 5 }}>
                        <Image style={{ borderColor: "lightgray", borderWidth: 4, width: 80, height: 80, borderRadius: 50 }} source={require('../assets/alirezaakbari2.jpg')} />
                        <Text>Me👱‍♂️</Text>
                    </View>
                    <View style={{ alignItems: 'center', gap: 5 }}>
                        <Image style={{ borderColor: "lightgray", borderWidth: 4, width: 80, height: 80, borderRadius: 50 }} source={require('../assets/alirezaakbari1.jpg')} />
                        <Text>Tolo TV</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const Posts = () => {
    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-around', position: 'relative' }}>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                    <MaterialIcons style={{ transform: [{ rotate: '90deg' }], position: "absolute" }} name="view-module" size={33} color="black" />
                    <View style={{ backgroundColor: 'black', height: 2, width: 60 }} />
                </View>
                <Image source={require('../assets/reels-fill.png')} style={{ width: 25, height: 25 }} />
                <Image source={require('../assets/instagram-tag-icon.png')} style={{ width: 25, height: 25 }} />
            </View>
            <View style={{ marginTop: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 1 }}>
                    <Image source={require('../assets/alirezaakbari.jpg')} style={{ width: "33%", height: 170 }} />
                    <Image source={require('../assets/alirezaakbari4.jpg')} style={{ width: "33%", height: 170 }} />
                    <Image source={require('../assets/alirezaakbar6.jpg')} style={{ width: "33%", height: 170 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 1 }}>
                    <Image source={require('../assets/alirezaakbari5.jpg')} style={{ width: "33%", height: 170 }} />
                    <Image source={require('../assets/alirezaakbari3.jpg')} style={{ width: "33%", height: 170 }} />
                    <Image source={require('../assets/alirezaakbari2.jpg')} style={{ width: "33%", height: 170 }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 1 }}>
                    <Image source={require('../assets/alirezaakbari7.jpg')} style={{ width: "33%", height: 170 }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    commentSheet: {
        position: 'absolute',
        width: '100%',
        height: '20%',
        backgroundColor: '#fff',
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 15,
        zIndex: 10,
    },
    handle: {
        width: 50,
        height: 4,
        backgroundColor: 'gray',
        alignSelf: 'center',
        borderRadius: 2,
        marginBottom: 10,
    },
    logoutText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default ProfileScreen;
