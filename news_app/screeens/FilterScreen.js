import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, TouchableOpacity, Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";
import { getArticlesByCategory, changeCategory } from '../actions';
import ArticleList from '../components/ArticleList';
import * as Colors from '../utils/Colors';

const FilterScreen = ({ navigation: { navigate }, dispatch, articles, selectedCategory, isLoading, hasError, errorMessage }) => {
    const categories = ['Bitcoin', 'Apple', 'Earthquake', 'Animal']

    useFocusEffect(
        React.useCallback(() => {
            dispatch(getArticlesByCategory(selectedCategory))
            return () => {
            };
        }, [])
    );

    return (
        <>
            {hasError ?
                showMessage({
                    message: `${errorMessage}`,
                    type: "danger",
                }) : null}
            <SafeAreaView style={style.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={style.scrollView}
                    contentContainerStyle={style.scrollViewContainer}>
                    {categories.map(item => {
                        return <CategoryItem
                            key={item}
                            item={item}
                            onPress={() => dispatch(changeCategory(item))}
                            selectedCategory={selectedCategory} />
                    })}
                </ScrollView>
                <View style={style.articleListView}>
                    {isLoading ? <ActivityIndicator size="large" color={Colors.main} /> :
                        <ArticleList news={articles} onPress={(item) => navigate('Detail', { item: item })} />}
                </View>
            </SafeAreaView>
        </>
    );
}

const CategoryItem = ({ item, onPress, selectedCategory }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[style.categoryItem, item === selectedCategory ? { ...style.categoryItemSelected } : null]}>
            <Text style={[style.categoryItemTitle, item === selectedCategory ? { ...style.categoryItemTitleSelected } : null]}>{item}</Text>
        </TouchableOpacity>
    )
}

export default FilterScreenContainer = connect(state => ({
    articles: state.filterArticles,
    selectedCategory: state.selectedCategory,
    isLoading: state.isFilterArticlesLoading,
    hasError: state.filterArticlesLoadingError,
    errorMessage: state.filterArticlesErrorMessage,
}))(FilterScreen)

const style = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    scrollView: { flex: 1, width: '100%', },
    scrollViewContainer: { padding: 20 },
    articleListView: { flex: 7, justifyContent: 'center', alignItems: 'center' },
    categoryItem: {
        padding: 15, borderRadius: 20, justifyContent: 'center',
        alignItems: 'center', marginHorizontal: 10, backgroundColor: Colors.white
    },
    categoryItemSelected: { backgroundColor: Colors.main },
    categoryItemTitle: { fontWeight: 'bold', color: Colors.main },
    categoryItemTitleSelected: { color: Colors.white }
})