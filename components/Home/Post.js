import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { FontAwesome } from "@expo/vector-icons";

const Posts = ({ post, onCommentPress }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} onCommentPress={onCommentPress} />
    </View>
  )
}


const PostHeader = ({ post }) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: post.profie_img }} style={styles.storyImage} />
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
          <Text style={{ marginLeft: 3, fontWeight: "700" }}>{post.user}</Text>
          <Text>{" "}{post.verfiedIcon}</Text>
        </View>
        <Text style={{ marginLeft: 3, fontSize: 12, color: 'gray' }}>{post.location}</Text>
      </View>
    </View>
    <Text style={{ fontWeight: "900" }} >...</Text>
  </View>
)
const PostImage = ({ post }) => (
  <View style={{ width: '100%', height: 450 }}>
    <Image
      source={{ uri: post.image }}
      style={{
        width: '100%',
        height: 450,
      }}
      resizeMode="cover"
    />
  </View>
)
const PostFooter = ({ post, onCommentPress }) => (
  <View style={{ paddingHorizontal: 10 }}>
    <Footerbuttons post={post} onCommentPress={onCommentPress} />
    <FooterDetails post={post} />
  </View>
);



const Footerbuttons = ({ post, onCommentPress }) => {
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);



  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLike(isLiked ? like - 1 : like + 1);
  }

  return (

    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10
    }}>
      <View style={{ flexDirection: 'row', gap: 13 }}>
        {/* like */}
        <TouchableOpacity onPress={handleLikePress}>
          <Text style={{ alignItems: "center", justifyContent: "center", display: 'flex' }}>
            <AntDesign name={!isLiked ? `hearto` : `heart`} size={24} color={!isLiked ? `black` : `red`} />
            <View>
              {!!post.likes && (
                <Text>{" "}{post.likes + like}</Text>
              )}
            </View>
          </Text>
        </TouchableOpacity>
        {/* comment */}
        <TouchableOpacity onPress={onCommentPress}>
          <Text>
            <Image style={{ width: 20, height: 20 }} source={require('../../assets/instagram-comment-icon.png')} />
            <View>
              {!!post.comments.length && (
                <Text>{" "}{post.comments.length}</Text>
              )}
            </View>
          </Text>
        </TouchableOpacity>


        {/* share */}
        <TouchableOpacity>
          <Text>
            <FontAwesome5 name="telegram-plane" size={24} color="black" />
            <View>
              {!!post.share && (
                <Text>{" "}{post.share}</Text>
              )}
            </View>
          </Text>
        </TouchableOpacity>
      </View>
      {/* save */}
      <View>
        <FontAwesome name="bookmark-o" size={24} color="black" />
      </View>
    </View>
  )
}

// comments

const FooterDetails = ({ post }) => (
  <>
    {/* Likes */}
    {/* Caption */}
    <View style={{ marginTop: 5 }}>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>{post.user}{" "}</Text>
        <Text style={{ marginLeft: 5 }}>{post.caption}</Text>
      </Text>
      <Text style={{ marginTop: 3, fontSize: 12, color: 'gray' }}>{post.postTime}</Text>
    </View>



  </>
)




export default Posts
const styles = StyleSheet.create({
  storyImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    marginRight: 6,
    borderWidth: 2,
    borderColor: 'tomato',
  }
})