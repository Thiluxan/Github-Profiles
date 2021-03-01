import React,{useEffect,useState} from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'
import Header from './Header'
import axios from 'axios'

export default function Profile({route,navigation}) {
    const {user} = route.params
    const [error,setError] = useState(false)
    const [details,setDetails] = useState({})
    
    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            setDetails(response.data)
        })
        .catch(err => {
            setError(true)
        })
    },[])

    const onPress = () => {
        navigation.navigate('Repos',{
            user:user
        })
    }

    return (
       <View>
           <Header navigate={navigation}/>
           {error && (
               <View style={styles.error}>
                   <Text style={styles.errorMessage}>
                       Unable to process your request
                   </Text>
               </View>
           )}
           {!error && (
               <View style={styles.detailContainer}>
                   <Text style={styles.details}>
                       Name: {details.name} {"\n\n"}
                       Location: {details.location}{"\n\n"}
                       Bio: {details.bio}{"\n\n"}
                       Link: {details.html_url}{"\n\n"}
                       Followers: {details.followers}{"\n\n"}
                       Following: {details.following}{"\n\n"}
                       Company: {details.company}{"\n\n"}
                       Blog: {details.blog}{"\n\n"}
                   </Text>
                   <TouchableOpacity 
                        style={styles.search}
                        onPress={onPress} 
                    >
                        <Text style={styles.buttonText}>View Repos</Text>
                    </TouchableOpacity>
               </View>
           )}
       </View>
    )
}

const styles = StyleSheet.create({
    error:{
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    },
    errorMessage:{
        fontSize:15,
        textAlign:'center'
    },
    details:{
        fontSize:20,
        textAlign:'center'
    },
    search:{
        backgroundColor:'purple',
        width:"40%",
        padding:20,
        paddingHorizontal:10,
    },
    detailContainer:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        marginTop:40
    },
    buttonText:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        padding:8,
        marginTop:-18
    }
})
