import React from 'react';
import {
  Pressable,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {normalize} from '../utils/Helper';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor="rgb(1, 10, 67)"
      />

      <View style={styles.mainview}>
        <Image
          source={require('../assets/trans.png')}
          style={styles.notifyImage1}
        />
        <Pressable
          style={{
            ...styles.absButton,
            bottom: normalize(22),
          }}
          onPress={() => {
            navigation.navigate('Details');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notifyImage1: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  absButton: {
    width: normalize(120),
    height: normalize(40),
    position: 'absolute',
    bottom: 1,
    left: normalize(32),
    marginBottom: -normalize(15),
  },
  mainview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
