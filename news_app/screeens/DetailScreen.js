import React from 'react';
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Colors from '../utils/Colors';

export default DetailScreen = ({ route, navigation: { navigate } }) => {
    const { item } = route.params
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.white }}>
            <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '100%', }}>
                    <Image
                        style={{ height: 300, resizeMode: 'cover', width: '100%' }}
                        source={{
                            uri: item.urlToImage ?? 'https://via.placeholder.com/150'
                        }} />
                </View>
                <View style={{ width: '100%', marginTop: 10, paddingHorizontal: 10 }}>
                    <Text style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 24, }}>{item.title}</Text>
                </View>
                <TouchableOpacity style={{ width: '100%', marginTop: 20, paddingHorizontal: 10 }} onPress={() => navigate('Web', { url: item.url })} >
                    <Text style={{ textAlign: 'left', fontWeight: 'bold', color: Colors.royalblue }}>{`Original Artical`}</Text>
                </TouchableOpacity>
                <View style={{ width: '100%', marginTop: 20, paddingHorizontal: 10 }}>
                    <Text style={{ textAlign: 'left', fontSize: 15, }}>{item.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}