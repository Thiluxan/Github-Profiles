import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const touchPress = () => {
    console.log("pressed")
}

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Github Profiles</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        backgroundColor:'blue',
        width:"100%",
        padding:10
    },
    text:{
        color:'white',
        textAlign:'center',
        textTransform:'capitalize',
        fontSize:25,
        paddingBottom:10
    }
})