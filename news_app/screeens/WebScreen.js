import React from 'react';
import { SafeAreaView, } from 'react-native';
import { WebView } from 'react-native-webview';
import * as Colors from '../utils/Colors';


export default WebScreen = ({ route }) => {
    const { url } = route.params
    return (
        <WebView
            source={{ uri: url }}
        />
    );
}