import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Colors from '../utils/Colors';

const ArticleItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={style.articleItem} onPress={onPress} >
            <Image
                style={style.articleImage}
                source={{
                    uri: item.urlToImage ?? 'https://via.placeholder.com/150'
                }} />
            <View style={style.articleTitleView}>
                <Text style={style.articleTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ArticleList = ({ news, onPress }) => {
    return (
        <FlatList
            data={news}
            renderItem={({ item }) => <ArticleItem item={item} onPress={() => onPress(item)} />}
            keyExtractor={item => item.title}
        />
    )
}

const style = StyleSheet.create({
    articleItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.whitesmoke,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.gray,
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation: 1,
    },
    articleImage: { height: 150, resizeMode: 'cover', width: '100%' },
    articleTitleView: { width: '100%', marginTop: 20, marginBottom: 20 },
    articleTitle: { textAlign: 'left', fontWeight: 'bold', fontSize: 22, },
})