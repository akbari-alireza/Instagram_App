import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import posts from '../data/posts';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            {/* Search Container */}
            <View style={styles.searchcontainer}>
                <Feather name="search" size={18} color="black" />
                {/* <Text>Search</Text> */}
                <TextInput
                    placeholder="Search"
                    style={{ fontSize: 16, width: '90%' }}
                />
            </View>

            {/* Explore Grid */}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
                <View style={styles.grid}>
                    {posts.map((post, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <Image
                                source={typeof post.image === 'string' ? { uri: post.image } : post.image}
                                style={styles.image}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchcontainer: {
        gap: 10,
        marginTop: 45,
        marginHorizontal: 25,
        backgroundColor: '#ebeced',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 1,
    },
    imageWrapper: {
        width: '33%',
        gap: 1,
    },
    image: {
        width: '100%',
        height: 150,
    },
});
