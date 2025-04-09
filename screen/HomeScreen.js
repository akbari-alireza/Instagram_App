import React, { useState, useRef } from 'react';
import {
  View, StatusBar, StyleSheet, ScrollView, Text,
  SafeAreaView, Image, Animated, PanResponder, TouchableOpacity
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AntDesign from '@expo/vector-icons/AntDesign';

import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import posts from '../data/posts';

const HomeScreen = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={['top', 'left', 'right']}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={{ flex: 1 }}>
          <Header />
          <ScrollView     showsVerticalScrollIndicator={false}>
            <Stories />
            {posts.map((post, index) => (
              <Post key={index} post={post} onCommentPress={() => setSelectedPost(post)} />
            ))}
          </ScrollView>
          {selectedPost && (
            <ViewComments post={selectedPost} onClose={() => setSelectedPost(null)} />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const ViewComments = ({ post, onClose }) => {
  const [likes, setLikes] = useState(post.comments.map(() => 0)); // Track likes for each comment
  const [likedComments, setLikedComments] = useState(post.comments.map(() => false)); // Track like status for each comment

  const handleLikePress = (index) => {
    const newLikes = [...likes];
    const newLikedComments = [...likedComments];

    // Toggle the like state for the specific comment
    if (newLikedComments[index]) {
      newLikes[index] -= 1; // Decrease likes if already liked
    } else {
      newLikes[index] += 1; // Increase likes if not liked
    }

    newLikedComments[index] = !newLikedComments[index]; // Toggle the liked state
    setLikes(newLikes);
    setLikedComments(newLikedComments);
  };


  const pan = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dy) > 5,
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy > 0) {
          pan.setValue(gesture.dy);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy > 100) {
          Animated.timing(pan, {
            toValue: 1000,
            duration: 300,
            useNativeDriver: true,
          }).start(onClose);
        } else {
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
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
      <Text style={styles.title}>Comments</Text>
      <ScrollView showsVerticalScrollIndicator={false}>

        {post.comments.map((comment, index) => (
          <View key={index} style={styles.commentRow}>
            {/* userIfo */}
            <View style={styles.userInfo}>
              <Image
                source={require('../assets/circle11.png')}
                style={styles.border}
              />
              <Image
                source={{ uri: comment.imageProfile }}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.username}>{comment.user} {comment.verfiedIcon}</Text>
                <Text>{comment.comment}</Text>
                <Text style={styles.replyText}>Reply</Text>
              </View>
            </View>
            <View style={styles.likeSection}>

              {/* Like Button */}
              <TouchableOpacity onPress={() => handleLikePress(index)}>
                <View style={styles.likeButton}>
                  <AntDesign
                    name={likedComments[index] ? 'heart' : 'hearto'}
                    size={18}
                    color={likedComments[index] ? 'red' : 'gray'}
                  />
                  <Text style={styles.likeCount}>{comment.likes + likes[index]}</Text>
                </View>
              </TouchableOpacity>
              {/* <AntDesign name="hearto" size={18} color="gray" /> */}
              {/* <Text style={styles.likeCount}>{comment.likes}</Text> */}
            </View>
          </View>
        ))}
      </ScrollView>
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  
  commentSheet: {
    position: 'absolute',
    width: '100%',
    height: '75%',
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
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  commentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  userInfo: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  border: {
    width: 62,
    height: 62,
    position: 'absolute',
    top: -9,
    left: -8,
  },
  username: {
    fontWeight: 'bold',
  },
  replyText: {
    color: 'gray',
    fontSize: 12,
  },
  likeSection: {
    alignItems: 'center',
  },
  likeCount: {
    color: 'gray',
    fontSize: 12,
  },
});
