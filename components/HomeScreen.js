import React,{useState} from 'react'
import { Button, StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import HomeHeader from './HomeHeader';

export default function HomeScreen({navigation}) {
    const [userName,setUserName] = useState('')

    const onPress = () => {
        navigation.navigate('Profile',{
            user:userName
        })
    }

    return (
    <View style={styles.container}>
      <HomeHeader/>
      <TextInput
        placeholder="Username"
        onChangeText = {(text) => setUserName(text)}
        style={styles.textInput}
        value={userName}
      />
      <TouchableOpacity 
        style={styles.search}
        onPress={onPress} 
       >
           <Text style={{textAlign:'center',color:'blue'}}>Seach Username</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    textInput : {
        marginTop:25,
        marginBottom:35,
        marginLeft:15,
        padding:20,
        width:'65%',
        borderColor:'black',
        borderBottomWidth:2
    },
    search:{
        backgroundColor:'grey',
        width:"40%",
        padding:20,
        paddingHorizontal:10,
        textAlign:'center',
        marginLeft:15
    }
  });
  