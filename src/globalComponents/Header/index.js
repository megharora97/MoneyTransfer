import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { normalize } from '../../utils/Helper';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import DismissKeyboard from '../DismissKeyboard';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header(props) {
  const { righticon, text, back, style, onPress, search,  } = props;

  return (
    <DismissKeyboard>
      <View
        style={{
          ...styles.header,
          width: back ? '90%' : '92%',
          ...style,
        }}>
        {!back ? (
          <View style={styles.headerview}>
            <IconAntDesign
              name="menuunfold"
              size={normalize(15)}
              style={{ color: 'rgb(255, 46, 99)' }}
              onPress={onPress}
            />
          </View>
        ) : <View style={styles.headerview1}>
          <IconAntDesign
            name="left"
            size={normalize(15)}
            style={{ color: 'rgba(231, 228, 228, 1)' }}
            onPress={onPress}
          />
          <Text style={styles.bck} onPress={onPress}>Back</Text>
        </View>}
        {search ? <>
          <TouchableOpacity
            style={{
              ...styles.searchBox,
              width: '80%',
              borderColor: 'rgba(29, 199, 172, 1)'
                        }}
            onPress={() =>
              alert('Search')}>
            <Icon
              name="search1"
              style={styles.searchIcon}
              color={"rgba(29, 199, 172, 1)"}
            />
            <Text style={{ color: "rgba(29, 199, 172, 1)" }}>
              Search
            </Text>
          </TouchableOpacity>
        </>
          :
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{
              ...styles.headerText,
              textAlign: 'center',
            }}>
            {text ? text : ''}
          </Text>}
        <View style={{ width: '10%' }} />
        {righticon ? <>{righticon}</> : null}
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(40),
    backgroundColor: 'rgb(1, 10, 67)',
    justifyContent: 'space-between',
  },
  bck:{ fontSize: normalize(11),     fontFamily:'Inter-Medium',
  marginLeft: normalize(5), color: 'rgba(215, 201, 201, 1)' },
  searchBox: {
    borderWidth: 1,
    height: '80%',
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: '4%',
  },
  searchIcon: {
    fontSize: normalize(20),
    marginHorizontal: normalize(15),
  },
  inputStyle: {
    fontSize: normalize(12),
    fontWeight: "400",
    color: 'rgba(29, 199, 172, 1)',
    backgroundColor: 'rgb(1, 10, 67)',
  },
  headerText: {
    width: '80%',
    fontFamily:'Inter-Medium',
    fontSize: normalize(14.2),
    color: 'rgba(215, 201, 201, 1)',
  },
  headerview: {
    backgroundColor: 'rgb(33, 42, 107)',
    height: normalize(27),
    elevation: 5,
    justifyContent: 'center',
    width: normalize(27),
    alignItems: 'center',
    borderRadius: normalize(18),
    borderWidth: 1,
  },
  headerview1: {
    backgroundColor: 'rgb(1, 10, 67)',
    height: normalize(27),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
});
