import {View, Text, Image, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';


export default function CartItemCard() {
  const navigation = useNavigation()
const [qty, setQty] = useState(1);
const [isDonate, setIsDonate] = useState(false);

  return (
    <View style={{backgroundColor :'#50EE7C',  borderRadius: 30, margin: 10}}>

    <TouchableOpacity
    // onPress={()=> navigation.navigate('ContestDetails')}
    activeOpacity={0.9}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 3,
        borderRadius: 30,
        backgroundColor: '#fff',
        overflow: 'hidden',
      }}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            justifyContent: 'center',
          }}>
        <Text style={{fontWeight: '900'}}>Headset Gtr</Text>

          <Image
            source={require('../assets/car.png')}
            style={{width: 200, height: 100, marginVertical: 15}}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: '900', color: '#716AFA'}}>
              WIN
            </Text>
            <Text style={{fontSize: 12}}> INR</Text>
            <Text style={{fontSize: 16, fontWeight: '900'}}> G5 Benz</Text>
          </View>
        </View>

        {/* SECT 2 */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/product.png')}
            style={{width: 80, height: 100}}
          />
          <Text style={{marginVertical: 5, fontWeight: '900'}}>RS : 100</Text>
          <Text style={{fontSize: 10}}>Quantity</Text>
         
         <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TouchableOpacity
            onPress={()=> {
              if(qty > 1)setQty(qty-1)
            }}
            style={{
              backgroundColor: '#C4C4C4',
              padding: 10,
              borderRadius: 50
            }}>
            <Text style={{color: '#fff', fontWeight: '900'}}>-</Text>
          </TouchableOpacity>
            <Text style={{color: '#000', fontWeight: '900', marginHorizontal: 10}}>{qty}</Text>
          <TouchableOpacity
            onPress={()=> setQty(qty+1)}
            style={{
              backgroundColor: '#716AFA',
              padding: 10,
              borderRadius: 50
            }}>
            <Text style={{color: '#fff', fontWeight: '900'}}>+</Text>
          </TouchableOpacity>
              </View>
        </View>
      </View>
    </TouchableOpacity>
  

{/* Donate */}
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
      <Switch
        trackColor={{ false: "#31984F", true: "#31984F" }}
        thumbColor={isDonate ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=> setIsDonate(!isDonate)}
        value={isDonate}
      />
      <Text style={{color: '#fff', fontSize: 12}}>Donate product & Double your coupons</Text>
    </View>
  
    </View>
  );
}

const styles = StyleSheet.create({});
