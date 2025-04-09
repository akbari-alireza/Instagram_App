import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import users from '../../data/users';

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
          <View style={{ alignItems: 'center', marginHorizontal: 6 }}>
            <Image source={{ uri: item.image }} style={styles.storyImage} />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Text style={{ color: 'black' }}>{item.username}</Text>
              <Text>{item.verfiedIcon}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'tomato',
  },
  myStory: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'tomato',
  }
});
