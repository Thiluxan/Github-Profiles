import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header(props) {

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigate.goBack()}>
            <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
            <Text style={styles.text}>Github Profiles</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        backgroundColor:'blue',
        width:"100%"
    },
    text:{
        color:'white',
        textAlign:'center',
        textTransform:'capitalize',
        fontSize:25,
        paddingBottom:10
    },
    back:{
        color:'white',
        fontSize:18,
        marginLeft:35,
        marginTop:5
    },  
    touchable:{
        backgroundColor:'blue',
        color:'white',
    }
})