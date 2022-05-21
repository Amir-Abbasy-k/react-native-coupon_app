import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('screen');

const Progress = props => {
  return (
    <View
      style={{
        backgroundColor: '#EE6D5050',
        borderRadius: 5,
        overflow: 'hidden',
      }}>
      <View
        style={{
          height: 5,
          width: '70%',
          backgroundColor: '#EE6D50',
        }}></View>
    </View>
  );
};

export default function Card(props) {
  return (
    <View
      style={{
        width: width / 2.5,
        height: width / 2.3,
        padding: 10,
        marginRight: 5,
        marginVertical: 10,
        borderWidth: 7,
        borderColor: '#EDEDED',
        borderRadius: 30,
        backgroundColor: '#fff',
        overflow: 'hidden',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 50,
        }}>
        <View style={{}}>
          <View style={{width: width / 3, height: 75, alignItems: 'center'}}>
            {/* reward */}
            <Image
              source={require('../assets/car.png')}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
            {/* product */}
            <View style={{position: 'absolute', right: 0}}>
              <View style={{width: 50, height: 50}}>
                <Image
                  source={require('../assets/product.png')}
                  style={{width: '100%', height: 100}}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          <Text style={{fontSize: 10}}>Get a chance to</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, fontWeight: '900', color: '#716AFA'}}>
              WIN
            </Text>
            <Text style={{fontSize: 12, fontWeight: '900'}}> 2,900,00</Text>
          </View>
        </View>

      </View>

      {/* Progress */}
      <View style={{marginTop: 5}}>
        <Progress />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: '900', fontSize: 10}}>1345 sold </Text>
          <Text style={{fontSize: 10}}>Out of 1825</Text>
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  
});
