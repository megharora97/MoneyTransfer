import {
    Image,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React from 'react';
import Header from '../globalComponents/Header';
import { normalize } from '../utils/Helper';
import Button from '../globalComponents/Button';

export default function Request({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
                backgroundColor="rgb(1, 10, 67)"
            />
            <Header
                back onPress={() => navigation.goBack()}
                text="New Request"
                style={{ width: '90%', fontsize: normalize(13) }}
            />
            <View style={styles.big} />
            <View style={styles.mid} />
            <View style={styles.small} />
            <Image source={require('../assets/img5.png')} style={styles.img} />

            <View style={{ marginVertical: normalize(60) }}>
                <Text style={styles.text}>Adeleke Ramon</Text>
                <Text style={styles.request}>is requesting for:</Text>
                <Text style={styles.price}>₦ 200,000</Text>
            </View>
            <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                <Button
                    text="Send Money"
                    style={{
                        backgroundColor: 'rgba(255, 46, 99, 1)',
                        width: normalize(150),
                    }}
                    textStyle={{
                        color: '#fff', fontFamily: 'Inter-Bold'
                    }}
                    onPress={() => navigation.navigate('Send')}
                />
                <Button
                    holo
                    text="Don't Send"
                    style={styles.disable}
                    textStyle={{ color: 'rgba(70, 78, 138, 1)' }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(1, 10, 67)',
    },
    big: {
        backgroundColor: 'rgba(16, 25, 78, 1)',
        height: normalize(200),
        width: normalize(200),
        alignSelf: 'center',
        marginVertical: normalize(50),
        borderRadius: normalize(180),
    },
    mid: {
        backgroundColor: 'rgba(25, 34, 89, 1)',
        height: normalize(150),
        width: normalize(150),
        marginTop: -normalize(225),
        alignSelf: 'center',
        borderRadius: normalize(180),
    },
    small: {
        backgroundColor: 'rgba(16, 25, 78, 1)',
        height: normalize(100),
        width: normalize(100),
        marginTop: -normalize(125),
        alignSelf: 'center',
        borderRadius: normalize(180),
    },
    img: {
        height: normalize(100),
        width: normalize(100),
        marginTop: -normalize(100),
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: normalize(20),
        color: 'rgba(238, 238, 238, 1)',
        fontFamily: 'Inter-Bold'
    },
    request: {
        textAlign: 'center',
        fontSize: normalize(13),
        marginTop: normalize(8),
        color: 'rgba(238, 238, 238, 1)',
        fontFamily: 'Inter-Light'
    },
    price: {
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        fontSize: normalize(25),
        marginTop: normalize(8),
        color: 'rgba(238, 238, 238, 1)',
    },
    disable: {
        backgroundColor: 'rgba(1, 10, 67, 1)',
        width: normalize(150),
        marginTop: normalize(30),
        fontFamily:'Inter-Medium'
    },
});
