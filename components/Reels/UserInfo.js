import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const UserInfo = ({ item, handleFollow, isFollowed }) => {
    return (
        <View style={styles.userRow}>
            <Image source={typeof item.avatar === 'string' ? { uri: item.avatar } : item.avatar} style={styles.avatar} />
            <View style={styles.userInfo}>
                <Text style={styles.username}>@{item.user}</Text>
            </View>
            {!isFollowed && (
                <TouchableOpacity
                    style={styles.followButton}
                    onPress={handleFollow}
                >
                    <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
            )}
     
        </View>
    )
}

const styles = StyleSheet.create({
    userRow: {
        position: 'absolute',
        left: 16,
        bottom: 130,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    userInfo: {
        marginLeft: 10,
    },
    username: {
        color: '#fff',
        fontSize: 16,
        textTransform: 'lowercase',
        letterSpacing: 0,
    },
    music: {
        color: '#fff',
        fontSize: 12,
    },
    followButton: {
        marginLeft: 10,
        borderColor: '#fff',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 5,
        height: 25,
        justifyContent: 'center',
    },
    followText: {
        color: '#fff',
        fontSize: 12,
    },
})

export default UserInfo
