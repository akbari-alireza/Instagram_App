import React, { useState, useRef } from 'react'
import { View, Text, Image, TouchableOpacity, Animated, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native'
import { Video } from 'expo-av'
import { MaterialIcons, Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import HeartAnimation from './HeartAnimation'
import UserInfo from './UserInfo'
import RightIcons from './RightIcons'

const { width, height } = Dimensions.get('window')
let lastTap = null

const ReelItem = ({ item }) => {
    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const scaleAnim = useRef(new Animated.Value(0)).current

    const handleLike = () => {
        setLikes(isLiked ? likes - 1 : likes + 1)
        setIsLiked(!isLiked)
        !isLiked && triggerHeartAnimation()
    }

    const [isFollowed, setIsFollowed] = useState(false)
    const handleFollow = () => {
        setIsFollowed(!isFollowed)
    }

    // double tap to like
    const triggerHeartAnimation = () => {
        scaleAnim.setValue(0)
        Animated.sequence([
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start()
    }

    return (
        <View style={styles.item}>
            <TouchableWithoutFeedback
                onPress={() => {
                    const now = Date.now()
                    if (lastTap && now - lastTap < 300) {
                        handleLike() // double tap detected
                    }
                    lastTap = now
                }}
            >
                <Video
                    source={item.video}
                    style={StyleSheet.absoluteFill}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    isMuted={false}
                />
            </TouchableWithoutFeedback>

            {/* animated heart in center */}
            <HeartAnimation scaleAnim={scaleAnim} />

            {/* top bar */}
            <View style={styles.topBar}>
                <View style={styles.reelsLabel}>
                    <Text style={styles.reelsText}>Reels</Text>
                    <FontAwesome name="angle-down" size={24} color="#fff" />
                </View>
                <SimpleLineIcons name="camera" size={24} color="#fff" />
            </View>

            {/* right icons */}
            <RightIcons item={item} handleLike={handleLike} isLiked={isLiked} />

            {/* user info & follow */}
            <UserInfo item={item} handleFollow={handleFollow} isFollowed={isFollowed} />

            {/* caption */}
            <View style={styles.captionContainer}>
                <Text style={{ color: '#fff', fontSize: 12 }}>{item.caption}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width,
        height,
        backgroundColor: '#000',
    },
    topBar: {
        marginTop: 35,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reelsLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    reelsText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },
    captionContainer: {
        position: 'absolute',
        bottom: 100,
        left: 20,
    },
})

export default ReelItem
