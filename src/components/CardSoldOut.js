import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function CardSoldOut() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingBottom: 20,
        margin: 10,
        borderRadius: 30,
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderWidth: 10,
        borderColor:'#E5E5E5'
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: '#CD1719',
          padding: 30,
          paddingVertical: 5,
          borderTopStartRadius: 25,
          zIndex: 1,
          width: '60%',
        }}>
        <Text style={{color: '#fff', fontSize: 9}}>Draw Date: </Text>
        <Text style={{color: '#fff', fontSize: 12}}>29 March 2022</Text>
      </View>

      <View
        style={{
          width: '100%',
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
          position: 'absolute',
          zIndex:1
        }}>
        <Image
          source={require('../assets/sold_out.png')}
          style={{width: 170, height: 70}}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 50,
        }}>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}>
          <Image
            source={require('../assets/car.png')}
            style={{width: 200, height: 100, opacity: 0.3}}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: '900', color: '#716AFA'}}>
              WIN
            </Text>
            <Text style={{fontSize: 16}}> INR</Text>
            <Text style={{fontSize: 16, fontWeight: '900'}}> 2,900,00</Text>
            <Text style={{fontSize: 16}}> cash</Text>
          </View>
          <Text>buy our Headset</Text>
        </View>

        {/* SECT 2 */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/product.png')}
            style={{width: 80, height: 100, opacity: 0.3}}
          />
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
