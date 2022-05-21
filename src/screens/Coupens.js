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

export default function Coupens() {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <Header homeHeader={false} title="My Coupens" />
        <Text style={{textAlign: 'center',}}>No items</Text>
      </SafeAreaView>
    </>
  );
}
