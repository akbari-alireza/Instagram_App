import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome5,MaterialCommunityIcons  } from '@expo/vector-icons'

const RightIcons = ({ item, handleLike, isLiked }) => {
    return (
        <View style={styles.rightIcons}>
            <TouchableOpacity onPress={handleLike} style={styles.iconBlock}>
                <MaterialIcons name={isLiked ? "favorite" : "favorite-border"} size={32} color={!isLiked ? '#fff' : 'red'} />
                <Text style={styles.iconText}>{item.likes}</Text>
            </TouchableOpacity>
            <View style={styles.iconBlock}>
                <Image
                    source={require('../../assets/instagram-comment-icon.png')}
                    style={{ width: 28, height: 28, tintColor: '#fff' }}
                />
                <Text style={styles.iconText}>{item.comments}</Text>
            </View>
            <View style={styles.iconBlock}>
                <Image
                    source={require('../../assets/instagram-share-icon.png')}
                    style={{ width: 28, height: 28, tintColor: '#fff' }}
                />
                <Text style={styles.iconText}>{item.shares}</Text>
            </View>
            <View style={styles.iconBlock}>
                <MaterialCommunityIcons name="dots-horizontal" size={24} color="#fff" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rightIcons: {
        position: 'absolute',
        right: 16,
        bottom: 140,
        alignItems: 'center',
        gap: 24,
    },
    iconBlock: {
        alignItems: 'center',
        gap: 4,
    },
    iconText: {
        color: '#fff',
    },
})

export default RightIcons
