import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Header() {
    return (
        <View>
            <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/logo.jpg')} />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>13</Text>
                    </View>
                    <Image style={{ width: 24, resizeMode: 'contain' }} source={require('../../assets/messenger.png')} />
                </TouchableOpacity>
            </View>
        </View>
            <View style={{ height: 1, backgroundColor: '#eaeaea' }} />
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: 10,
        backgroundColor: '#fff',
    },
    logo: {
        width: 120,
        height: 50,
        resizeMode: 'contain',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    badge: {
        position: 'absolute',
        backgroundColor: 'tomato',
        width: 25,
        height: 18,
        left: 5,
        top: 90,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    badgeText: {
        color: 'white',
        fontWeight: '600',
    },
})