import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('screen');

const RenderItem = () => {
  const progress_bg_Colors = ['#50EE7C50', '#50EE7C00'];

  return (
    <LinearGradient
      colors={progress_bg_Colors}
      style={{
        width,
        height: height / 2.6,
        justifyContent: 'flex-end',
        backgroundColor: '#4540A2',
        padding: 20,
      }}>
      <Image
        source={require('../assets/car.png')}
        style={{...StyleSheet.absoluteFillObject, width: width,  height: height / 2.5}}
        resizeMode="contain"
      />
      <Text style={{fontSize: 30, fontWeight: '900', color: '#fff'}}>Win</Text>
      <Text style={{fontSize: 20, fontWeight: '900', color: '#fff'}}>
        i-Phone 13
      </Text>
      <Text style={{fontSize: 16, fontWeight: '900', color: '#fff'}}>
        Spend Rs 120 and make it yours
      </Text>
    </LinearGradient>
  );
};

export default function Carousel() {
  return (
    <View>
      <FlatList
        data={new Array(5).fill('*')}
        horizontal
        pagingEnabled
        style={width}
        contentContainerStyle={width}
        renderItem={item => <RenderItem />}
      />
    </View>
  );
}
