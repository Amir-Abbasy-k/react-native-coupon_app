import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  Card,
  CardSoldOut,
  CardWinner,
  CardClosingSoon,
  Header,
  Carousel,
} from '../components';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <Header homeHeader={true} title="Home" />

      <ScrollView style={styles.root}>
        <Carousel />

        <Text style={styles.heading}>Closing soon</Text>
        <FlatList
          data={new Array(5).fill('*')}
          renderItem={() => <CardClosingSoon />}
          horizontal
          keyExtractor={(_, k) => k.toString()}
          contentContainerStyle={{paddingLeft: 10}}
        />

        <FlatList
          data={[1,2,3,4,5]}
          renderItem={(_,index) => <Card {..._} />}
          keyExtractor={(_, k) => k.toString()}
        />


        <Text style={styles.heading}>Winners</Text>
        <FlatList
          data={new Array(4).fill('*')}
          renderItem={() => <CardWinner />}
          keyExtractor={(_, k) => k.toString()}
        />


        <Text style={styles.heading}>Sold Out</Text>
        <FlatList
          data={new Array(3).fill('*')}
          renderItem={() => <CardSoldOut />}
          keyExtractor={(_, k) => k.toString()}
        />

        {/* 
        <CardSoldOut />
        <Card />
        <CardWinner /> 
        <CardClosingSoon />
        */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    // padding: 5
  },
  heading: {
    fontWeight: '900',
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 20,
    marginTop: 30,
  },
});
