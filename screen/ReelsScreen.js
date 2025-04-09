import React, { useState } from 'react'
import { FlatList, View, Dimensions } from 'react-native'
import ReelItem from '../components/Reels/ReelItem'
import reelsData from '../data/reelsData'

const { height } = Dimensions.get('window')

const ReelsScreen = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

    const onPressVideo = (index) => {
        setCurrentVideoIndex(index)
    }

    const renderItem = ({ item, index }) => {
        return (
            <ReelItem
                item={item}
                index={index}
                isCurrentVideo={index === currentVideoIndex}
                onPressVideo={onPressVideo}
            />
        )
    }

    return (
        <FlatList
            data={reelsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            snapToInterval={height}
            decelerationRate="fast"
        />
    )
}

export default ReelsScreen
