import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CartItemCard, Header} from '../components';

export default function WishList() {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <Header homeHeader={false} title="My Wishlist" />
        <Text style={{textAlign: 'center',  marginVertical: 20}}>No items</Text>
      </SafeAreaView>
    </>
  );
}
