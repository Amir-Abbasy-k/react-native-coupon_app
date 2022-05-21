import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  Card,
  CardSoldOut,
  CardWinner,
  CardClosingSoon,
  Header,
  Carousel,
} from '../components';

export default function ContestDetails() {
  const [showReward, setShowReward] = useState(false);
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <Header homeHeader={false} title="Contest Details"  canGoBack={true}/>
      <ScrollView style={styles.root}>
        <View>
          <Image
            source={require('../assets/car.png')}
            style={{width: '100%', height: 175}}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 2,
            borderRadius: 25,
            borderColor: '#716AFA',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={[styles.button, showReward && {backgroundColor: '#fff'}]}
            onPress={() => setShowReward(!showReward)}>
            <Text style={[styles.buttonText, showReward && {color: '#716AFA'}]}>
              Prize details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, !showReward && {backgroundColor: '#fff'}]}
            onPress={() => setShowReward(!showReward)}>
            <Text
              style={[styles.buttonText, !showReward && {color: '#716AFA'}]}>
              Product Details
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Get a chance to WIN :</Text>
       
        <Text style={styles.price}>{ !showReward ? "INR 2,900,00 cash" : "Benz G4n"}</Text>
        <Text style={styles.discription}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy isIn publishing and
          graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before the final copy is
        </Text>
      </ScrollView>

  
    </SafeAreaView>
        <View
        style={{
          backgroundColor: '#716AFA',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          alignItems: 'center'
        }}>
        <View style={{}}>
          <Text style={{color: '#fff'}}>Buy a A4rf Heaset</Text>
          <Text style={{color: '#fff', fontWeight: '900', fontSize: 16}}>
            Rs 120 /-
          </Text>
          <Text style={{color: '#fff'}}>Inclusive of VAT</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 25,
            height: 45,
            paddingHorizontal: 20,
            textAlign: 'center',
            justifyContent: 'center',
          }}
          // onPress={() => null}
        >
          <Text style={{color: '#716AFA', fontWeight: '900'}}>ADD TO CART</Text>
        </TouchableOpacity>
      </View></>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  name: {
    fontSize: 20,
  },
  price: {
    fontSize: 25,
    fontWeight: '900',
  },
  discription: {
    fontSize: 14,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#716AFA',
    padding: 10,
    borderRadius: 20,
    width: '50%',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
