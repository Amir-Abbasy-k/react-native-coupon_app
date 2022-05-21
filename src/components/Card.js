import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Progress = ({progress}) => {
  // console.log(progress);
  function color() {
    color = '';
    if (progress > 50 && progress < 75) {
      color = '#D8EE50';
    } else if (progress >= 75) {
      color = '#EE6D50';
    } else {
      color = '#50EE7C';
    }
    return color;
  }

  var col = color();
  const progress_bg_Colors = [col + '50', col + '00'];
  const progressColors = [col, col + '00'];

  return (
    <LinearGradient
      colors={progress_bg_Colors}
      style={{
        ...StyleSheet.absoluteFill,
        maxHeight: 60,
      }}>
      <LinearGradient
        colors={progressColors}
        style={{
          ...StyleSheet.absoluteFill,
          maxHeight: 60,
          width: progress + '%',
        }}></LinearGradient>
    </LinearGradient>
  );
};

export default function Card(props) {
  // console.log("--",props.index);
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('ContestDetails')}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingBottom: 20,
        margin: 10,
        borderRadius: 30,
        backgroundColor: '#cccccc30',
        overflow: 'hidden',
      }}>
      <Progress progress={(props.index + 1) * 15} />
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: '900'}}>1345 sold </Text>
        <Text>Out of 1825</Text>
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
            style={{width: 200, height: 100}}
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
            style={{width: 80, height: 100}}
          />
          <Text style={{marginVertical: 5}}>RS 100/- Only</Text>
          <TouchableOpacity
            onPress={() => nav.navigate('Cart')}
            style={{
              backgroundColor: '#716AFA',
              padding: 10,
              borderRadius: 50,
              right: 20,
            }}>
            <Text style={{color: '#fff', fontWeight: '900'}}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
