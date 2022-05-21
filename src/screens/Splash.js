import { View, Text } from 'react-native'
import React, { useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const nav = useNavigation()
    useEffect(()=>{
        setTimeout(() => {
            nav.navigate('Main')
        }, 1000);
    })
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>App Name</Text>
      <Text style={{fontSize: 15}}>Loading...</Text>
    </View>
  )
}