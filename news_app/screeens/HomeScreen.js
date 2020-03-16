import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { showMessage, hideMessage } from "react-native-flash-message";
import { getTopArticles } from '../actions';
import ArticleList from '../components/ArticleList';
import * as Colors from '../utils/Colors';


const HomeScreen = ({ navigation: { navigate }, dispatch, articles, isLoading, hasError, errorMessage }) => {
    useFocusEffect(
        React.useCallback(() => {
            dispatch(getTopArticles())
            return () => { };
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
                {isLoading ? <ActivityIndicator size="large" color={Colors.main} /> :
                    <ArticleList news={articles} onPress={(item) => navigate('Detail', { item: item })} />
                }
            </SafeAreaView>
        </>
    );
}



export default HomeScreenContainer = connect(state => ({
    articles: state.topArticles,
    isLoading: state.isTopArticlesLoading,
    hasError: state.topArticlesLoadingError,
    errorMessage: state.topArticlesErrorMessage,
}))(HomeScreen)

const style = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})