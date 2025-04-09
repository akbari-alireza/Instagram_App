import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import users from '../../data/users';
import Entypo from '@expo/vector-icons/Entypo';
const Stories = () => {
  return (
    <View style={{ marginTop: 10, marginBottom: 5 }}>
      <FlatList
        data={users}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 6 }}
        renderItem={({ item }) => (
          <View style={styles.storyContainer}>
            <View style={styles.imageWrapper}>
              <Image source={require('../../assets/circle11.png')} style={styles.border} />
              {
                !item.image[0] && <Entypo name="circle-with-plus" size={23} color="black" style={styles.plus} />
              }
              <Image
                source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                style={styles.storyImage}
              />
            </View>
            <View>

              {
                !item.image[0] && <Text style={styles.yourStory}>Your Story</Text>
              }
              {
                item.image[0] && <View style={styles.usernameWrapper}>
                  <Text style={styles.username}>{item.username}</Text>
                  <Text>{item.verfiedIcon}</Text>
                </View>
              }
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 0,
    padding: 0,
    gap: 1,
  },
  imageWrapper: {
    width: 85,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

  },
  border: {
    width: 85,
    height: 85,
    position: 'absolute',
    top: -0.4,
    left: 0.3,
  },
  storyImage: {
    width: 62,
    height: 62,
    borderRadius: 50,
  },
  usernameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  username: {
    color: 'grart',
  },
  yourStory: {
    color: 'gray',
  },
  plus: {
    position: 'absolute',
    zIndex: '10',
    top: 55,
    left: 48,
    backgroundColor: 'white',
    padding: 1.5,
    borderRadius: 50,

  }

});
