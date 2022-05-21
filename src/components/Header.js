import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header(props) {
  const nav = useNavigation();
  return (
    <View
      style={{
        padding: 10,
        position: props?.homeHeader ? 'absolute' : 'relative',
        top: 0,
        zIndex: 999,
        width: '100%',
        paddingRight: 20,
        borderBottomWidth: 0.2,
        borderColor: '#716AFA',
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          
          {props?.canGoBack && 
          <MaterialIcons
            name="arrow-back-ios"
            color="#444444"
            size={20}
            style={{marginLeft: 10}}
            onPress={() => nav.goBack()}
          />
}
          {props?.homeHeader && (
            <IconFA name="apple" color={'#fff'} size={25} />
          )}
          <Text
            style={{
              ...styles.appName,
              color: props?.homeHeader ? '#fff' : '#716AFA',
            }}>
            {props?.title || 'Title'}
          </Text>
        </View>
        <IconFA
          onPress={() => nav.navigate('Profile')}
          name="user"
          color={props?.homeHeader ? '#fff' : '#716AFA'}
          size={25}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
});
