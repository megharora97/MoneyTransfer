import {
    Image,
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

export default function Send({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
                backgroundColor="rgb(1, 10, 67)"
            />
            <Header
                back
                onPress={() => navigation.goBack()}
                search
                style={{ width: '90%', fontsize: normalize(13) }}
            />

            {/* Filtered Data */}
            <View style={styles.big}>
                <Image source={require('../assets/img7.png')} style={styles.bigview} />
                <Text style={styles.bigtext}>Adedoyin Leke</Text>
            </View>
            <View style={styles.mid}>
                <Image source={require('../assets/img11.png')} style={styles.midimg} />
                <Text style={styles.midtext}>Adedoyin Leke</Text>
                <Image source={require('../assets/img8.png')} style={styles.mid1img} />
                <Text style={styles.midtext1}>Aduni Wale</Text>
                <Image source={require('../assets/img9.png')} style={styles.mid2img} />
                <Text style={styles.midtext2}>Adeleke Adeyanju</Text>
                <Image source={require('../assets/img12.png')} style={styles.mid3img} />
                <Text style={styles.midtext3}>Adelaide Uti (son)</Text>
            </View>
            <View style={styles.small}>
                <Image
                    source={require('../assets/img10.png')}
                    style={styles.smallimg}
                />
                <Text style={styles.smalltext}>Adolph colleague</Text>
            </View>

            {/*  Filtered Individual */}
            <View style={styles.scrollviewcontainer}>
                <View style={styles.section} />
                <View style={{ alignSelf: 'center', padding: normalize(12) }}>
                    <Image source={require('../assets/img6.png')} style={styles.img} />
                    <Text style={styles.text}>Adeleke Adeyanju</Text>
                    <Text style={{
                        ...styles.text,
                        fontFamily: 'Inter-Medium', fontSize: normalize(12),
                        marginBottom: normalize(12),
                        marginVertical: 0,
                    }}>(+234) 905 1694 275</Text>
                    <Button
                        text="Continue"
                        style={styles.btn}
                        textStyle={styles.btntext}
                        onPress={() => alert('Money Sent')}
                    />
                </View>
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
        backgroundColor: 'rgb(1, 10, 67)',
        width: '100%',
        height: '50%',
        borderRadius: normalize(180),
        borderColor: 'rgb(33, 42, 107)',
        borderWidth: 1,
        marginTop: normalize(10),
    },
    bigview: {
        width: normalize(50),
        height: normalize(50),
        marginLeft: normalize(40),
    },
    bigtext: {
        marginLeft: normalize(30), fontSize: normalize(11), fontFamily: 'Inter-Medium'
    },
    mid: {
        backgroundColor: 'rgb(1, 10, 67)',
        width: '70%',
        height: '35%',
        borderRadius: normalize(180),
        borderColor: 'rgb(33, 42, 107)',
        borderWidth: 1,
        marginTop: -normalize(280),
        alignSelf: 'center',
    },
    midimg: {
        width: normalize(50),
        height: normalize(50),
        marginLeft: normalize(150),
    },
    mid1img: {
        width: normalize(50),
        height: normalize(50),
        marginTop: normalize(130),
        marginLeft: normalize(80),
    },
    mid2img: {
        width: normalize(60),
        height: normalize(60),
        marginTop: -normalize(160),
        marginLeft: normalize(180),
    },
    mid3img: {
        width: normalize(50),
        height: normalize(50),
        marginTop: -normalize(50),
        marginLeft: -normalize(20),
    },
    midtext: {
        marginLeft: normalize(150), width: normalize(90),
        fontSize: normalize(11), fontFamily: 'Inter-Medium'
    },
    midtext1: { marginLeft: normalize(75), fontSize: normalize(11), fontFamily: 'Inter-Medium' },
    midtext2: {
        marginLeft: normalize(170),
        fontSize: normalize(11),
        fontFamily: 'Inter-Medium',
        color: 'rgba(29, 199, 107, 1)',
        width: normalize(96),
    },
    midtext3: { marginLeft: -normalize(25), fontSize: normalize(11), fontFamily: 'Inter-Medium' },
    small: {
        backgroundColor: 'rgb(1, 10, 67)',
        width: '40%',
        height: '20%',
        borderRadius: normalize(180),
        borderColor: 'rgb(33, 42, 107)',
        borderWidth: 1,
        marginTop: -normalize(180),
        alignSelf: 'center',
    },
    smallimg: { width: normalize(50), height: normalize(50) },
    smalltext: { fontSize: normalize(11), marginLeft: -normalize(10), fontFamily: 'Inter-Medium' },
    btntext: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: normalize(14),
        fontFamily: 'Inter-Medium'
    },
    text: {
        marginVertical: normalize(12),
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'Inter-Bold',
        fontSize: normalize(16),
        textAlign: 'center',
    },
    btn: {
        backgroundColor: 'rgba(255, 46, 99, 1)',
        width: normalize(150),
        marginVertical: normalize(12),
    },
    img: { width: normalize(100), height: normalize(100), alignSelf: 'center' },
    scrollviewcontainer: {
        backgroundColor: 'rgba(16, 25, 78, 1)',
        elevation: 5,
        marginTop: normalize(105),
        borderTopRightRadius: normalize(18),
        borderTopLeftRadius: normalize(18),
        height: '45%',
    },
    section: {
        height: normalize(5),
        backgroundColor: 'rgba(78, 88, 159, 1)',
        width: normalize(50),
        alignSelf: 'center',
        marginVertical: normalize(10),
        borderRadius: normalize(18),
    },
});
