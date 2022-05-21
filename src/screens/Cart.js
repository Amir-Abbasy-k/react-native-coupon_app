import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {CartItemCard, Header} from '../components';

export default function Cart() {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <Header homeHeader={false} title="My Cart" />
        <ScrollView style={styles.root}>
          <CartItemCard />
        </ScrollView>
      </SafeAreaView>

      <View
        style={{
          borderColor: '#716AFA',
          borderWidth: 2,
          borderBottomWidth: 0,
          padding: 20,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
        }}>
          <Text style={{color: '#716AFA'}}>Inclusive of VAT</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#716AFA'}}>2 items</Text>
          <Text style={{color: '#716AFA', fontWeight: '900', fontSize: 16}}>
            Rs 120.00 /-
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#716AFA',
            borderRadius: 25,
            height: 45,
            paddingHorizontal: 20,
            marginVertical: 20,
            justifyContent: 'center',
            width: '100%'
          }}
          // onPress={() => null}
        >
          <Text style={{color: '#fff', fontWeight: '900', textAlign: 'center',}}>PAY NOW</Text>
        </TouchableOpacity>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 5,
  },
});
