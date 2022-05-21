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
import {TimeLine, Header} from '../components';
import IconFA from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const settings_list = [
  {name: 'Personal Details', screen: '_'},
  {name: 'Wishlist', screen: 'WishList'},
  {name: 'Active Coupons', screen: 'Coupons'},
  {name: 'Settings', screen: '_'},
  {name: 'Logout', screen: '_'},
];


const ListItem = props => {
  const nav = useNavigation()
  return <TouchableOpacity
  onPress={() => nav.navigate('Home')}
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius:10,
    paddingVertical: 10,
   marginHorizontal:10,
    marginBottom: 10,
  //   Shadow
    backgroundColor:'#fff',
    elevation: 10,
    shadowOpacity: 1,
    shadowColor: '#716AFA',
  }}>
  <Text style={{fontWeight: '600', }}>{props.item.name}</Text>
  <MaterialIcons
    name="arrow-forward-ios"
    color="#44444470"
    size={20}
    style={{marginTop: 5}}
  />
</TouchableOpacity>}


export default function Profile() {
  return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <Header homeHeader={false} title="Profile" />
        <ScrollView style={styles.root}>
          <View style={{alignItems: 'center'}}>
        <IconFA
        onPress={()=> nav.navigate("Profile")}
        name="user"
        color='#716AFA'
        size={50}
        />
        <Text style={styles.name}>Ashmil Mohd</Text>
        <Text style={styles.email}>ashmilmohd@gmail.com</Text>
        </View>

{/* Time Line */}
        <TimeLine/>

        <FlatList
        data={settings_list}
        renderItem={({item}, index) => <ListItem item={item} />}
        keyExtractor={(_, k) => k.toString()}
        contentContainerStyle={{marginTop: 20}}
      />

        </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 5,
  },
  name:{
    fontSize: 20,
    fontWeight: '900',
    color: '#716AFA'
  },
  email:{
    fontSize: 14,
    color: '#716AFA'
  }
});
