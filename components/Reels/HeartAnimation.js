import React from 'react'
import { Animated,Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'



const { width, height } = Dimensions.get('window')
const HeartAnimation = ({ scaleAnim }) => {
    return (
        <Animated.View style={[styles.heartContainer, { transform: [{ scale: scaleAnim }] }]}>
            <MaterialIcons name="favorite" size={70} color="red" />
        </Animated.View>
    )
}

const styles = {
    heartContainer: {
        position: 'absolute',
        top: height/2 -40,
        right: -3,
        opacity: 0.7,
    },
}

export default HeartAnimation
