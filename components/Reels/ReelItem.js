import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Animated, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native'
import { Video } from 'expo-av'
import { FontAwesome, SimpleLineIcons, Entypo } from '@expo/vector-icons'
import HeartAnimation from './HeartAnimation'
import UserInfo from './UserInfo'
import RightIcons from './RightIcons'

const { width, height } = Dimensions.get('window')
let lastTap = null

const ReelItem = ({ item, videoRef, onPressVideo }) => {
    const [like, setLike] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const scaleAnim = useRef(new Animated.Value(0)).current

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
        !isLiked && triggerHeartAnimation()
    }

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

    // const [status, setStatus] = useState({})
    
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
                    ref={videoRef}
                    source={item.video}
                    style={StyleSheet.absoluteFill}
                    resizeMode="cover"
                    shouldPlay={false}
                    useNativeControls
                    // onPlaybackStatusUpdate={setStatus}
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

            {/* play button */}
            {/* <TouchableOpacity
                onPress={() =>
                    status?.isPlaying
                        ? videoRef.current.pauseAsync()
                        : videoRef.current.playAsync()
                }
                style={styles.playButton}
            >
                <Entypo name={status?.isPlaying ? 'pause' : 'controller-play'} size={70} color={status?.isPlaying ? 'transparent' : 'white'} />
            </TouchableOpacity> */}

            {/* right icons */}
            <RightIcons item={item} handleLike={handleLike} isLiked={isLiked} like={like} />

            {/* user info & follow */}
            <UserInfo item={item} handleFollow={() => {}} isFollowed={false} />

            {/* caption */}
            <View style={styles.captionContainer}>
                <Text style={{ color: '#fff', fontSize: 12 }}>{item.caption}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    playButton: {
        position: 'absolute',
        top: height / 2 - 40,
        left: width / 2 - 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

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
