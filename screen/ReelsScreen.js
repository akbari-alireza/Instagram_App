import React, { useState, useRef } from 'react'
import { FlatList, View, Dimensions } from 'react-native'
import ReelItem from '../components/Reels/ReelItem'
import reelsData from '../data/reelsData'

const { height } = Dimensions.get('window')

const ReelsScreen = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const videoRefs = useRef([])

    // پخش ویدیوها به محض نمایش آن‌ها
    const handleViewableItemsChanged = ({ viewableItems }) => {
        viewableItems.forEach(({ item }) => {
            const videoRef = videoRefs.current[item.id]
            if (videoRef) {
                videoRef.playAsync()  // پخش ویدیوی جدید
            }
        })

        // متوقف کردن ویدیوهایی که از صفحه خارج شده‌اند
        const invisibleItems = viewableItems.filter(item => !item.isViewable)
        invisibleItems.forEach(({ item }) => {
            const videoRef = videoRefs.current[item.id]
            if (videoRef) {
                videoRef.pauseAsync()  // توقف ویدیوهای دیگر
            }
        })
    }

    const renderItem = ({ item, index }) => {
        return (
            <ReelItem
                item={item}
                index={index}
                isCurrentVideo={index === currentVideoIndex}
                onPressVideo={setCurrentVideoIndex}
                videoRef={(el) => (videoRefs.current[item.id] = el)}  // اتصال ref به ویدیو
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
            onViewableItemsChanged={handleViewableItemsChanged} // بررسی ویدیوهای قابل مشاهده
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        />
    )
}

export default ReelsScreen
