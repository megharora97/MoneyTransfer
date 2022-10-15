import React from 'react';
import {
  Pressable,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  Platform,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../globalComponents/Header';
import { normalize } from '../utils/Helper';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { transactions } from '../constant/dummy';

export default function Details({ navigation }) {
  const _renderTrans = (item, index) => {
    return (
      <>
        <View
          style={{
            ...styles.transview,
            backgroundColor:
              index % 2 ? 'rgba(16, 25, 78, 1)' : 'rgba(25, 34, 89, 1)',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
              <Image style={styles.imgview} source={item.img} />
            </View>
            <View style={styles.namee}>
              <Text style={styles.namestyle}>{item.name}</Text>
              <View
                style={{
                  ...styles.listview,
                  backgroundColor: item.color,
                }}>
                <View style={styles.imglist}>
                  <Image
                    style={{
                      ...styles.imgg,
                      tintColor: item.color,
                    }}
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={item.icon}
                  />
                </View>
                <Text style={styles.tagview}>{item.tag}</Text>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text
              style={{
                color: item.color,
                fontSize: normalize(13),
                fontFamily: 'Inter-Bold'
              }}>
              ₦ {item.price}
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor="rgb(1, 10, 67)"
      />
      <Header
        text="Hello Sandra"
        style={{ width: '90%', fontsize: normalize(13) }}
        righticon={
          <>
            <View style={styles.righticon}>
              <Text style={{
                color: 'rgb(66, 109, 220)', fontFamily: 'Inter-Bold'
              }}>Add Money</Text>
            </View>
          </>
        }
      />
      {/* Current Balance */}
      <View style={{ paddingHorizontal: '5%', marginTop: normalize(15) }}>
        <Text style={styles.current}>Your Current Balance is </Text>
        <Text style={styles.money}>₦ 200,000 </Text>
      </View>
      {/* Request Money */}
      <View style={styles.request}>
        <Pressable
          style={styles.press}
          onPress={() => navigation.navigate('Request')}>
          <Text style={styles.requesttext}>Request Money</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={() => alert('Money Sent')}>
          <Text style={styles.requesttext}>Send Money</Text>
        </Pressable>
      </View>

      <ScrollView
        style={styles.scrollviewcontainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.section} />

        {/* All transaction */}
        <View style={styles.alltrans}>
          <Text style={styles.alltranstext}>All Transactions</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.sortt}>
              Sort By : {'  '} <Text style={styles.recent}>Recent</Text>{' '}
              <IconAntDesign
                name="down"
                size={normalize(15)}
                style={{ color: 'rgba(231, 228, 228, 1)' }}
              />
            </Text>
          </View>
        </View>

        {/* List */}
        <>{transactions.map(_renderTrans)}</>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(1, 10, 67)',
  },
  namee: {
    justifyContent: 'center',
    marginLeft: normalize(10)
  },
  current: {
    color: 'rgba(231, 228, 228, 1)',
    fontWeight: '500',
    fontSize: normalize(13),
    fontFamily: 'Inter-Medium'
  },
  request: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingVertical: normalize(10),
  },
  press: {
    borderWidth: 1,
    width: '45%',
    borderColor: 'rgba(70, 78, 138, 1)',
    borderRadius: normalize(8),
    padding: normalize(15),
  },
  sortt: {
    color: 'rgba(78, 88, 159, 1)',
    fontFamily: 'Inter-Light',
    fontSize: normalize(13),
  },
  recent: {
    color: 'rgba(231, 228, 228, 1)',
    fontFamily: 'Inter-Bold',
    fontSize: normalize(13),
  },
  alltrans: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    paddingVertical: normalize(10),
  },
  alltranstext: {
    color: 'rgba(231, 228, 228, 1)',
    fontSize: normalize(13),
    fontFamily: 'Inter-Medium'
  },
  money: {
    color: 'rgba(231, 228, 228, 1)',
    fontSize: normalize(21),
    marginVertical: normalize(10),
    fontFamily: 'Inter-Bold'
  },
  requesttext: {
    textAlign: 'center',
    color: 'rgba(70, 78, 138, 1)',
    fontsize: normalize(15),
    fontFamily: 'Inter-Bold'
  },
  section: {
    height: normalize(5),
    backgroundColor: 'rgba(78, 88, 159, 1)',
    width: normalize(50),
    alignSelf: 'center',
    marginVertical: normalize(10),
    borderRadius: normalize(18),
  },
  imgg: {
    width: normalize(13),
    alignSelf: 'center',
    height: normalize(13),
    justifyContent: 'center',
  },
  tagview: {
    fontSize: normalize(12),
    marginLeft: normalize(5),
    justifyContent: 'center',
    fontFamily: 'Inter-Bold',
    color: '#FFF',
  },
  imglist: {
    borderRadius: normalize(18),
    backgroundColor: 'white',
    height: normalize(18),
    width: normalize(18),
    justifyContent: 'center',
  },
  listview: {
    paddingHorizontal: normalize(7),
    paddingVertical: normalize(5),
    borderRadius: normalize(18),
    marginTop: normalize(5),
    borderWidth: 0.5,
    flexDirection: 'row',
    elevation: 5,
  },
  scrollviewcontainer: {
    backgroundColor: 'rgba(16, 25, 78, 1)',
    elevation: 5,
    marginTop: normalize(15),
    borderTopRightRadius: normalize(18),
    borderTopLeftRadius: normalize(18),
    height: '100%',
  },
  namestyle: {
    color: 'rgba(133, 142, 197, 1)',
    fontSize: normalize(12),
    fontFamily: 'Inter-Bold'
  },
  righticon: {
    right: 0,
    paddingHorizontal: normalize(10),
    borderRadius: normalize(18),
    paddingVertical: normalize(5),
    position: 'absolute',
    backgroundColor: 'rgba(33, 42, 107, 1)',
    borderRadius: normalize(8),
    borderWidth: 0.5,
    elevation: 5,
  },
  imgview: { width: normalize(45), height: normalize(45) },
  transview: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    width: '100%',
    height: normalize(80),
    borderColor: 'rgba(16, 25, 78, 1)',
    borderWidth: 0.2,
  },
});
