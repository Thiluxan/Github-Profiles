import React,{useState,useEffect} from 'react'
import { View,Text, Button,FlatList,StyleSheet } from 'react-native'
import {Card,ListItem} from 'react-native-elements'
import Header from './Header'
import axios from 'axios'

export default function RepoList({route,navigation}) {
    const {user} = route.params
    const [repos,setRepos] = useState([])
    const [error,setError] = useState(false)

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}/repos`)
        .then(response => {
            response.data.map(repo => {
                let rep = {
                    id:repo.id,
                    name:repo.name,
                    created:repo.created_at,
                    url:repo.html_url
                }
                repos.push(rep)
            })
        })
        .catch(err => {
            setError(true)
        })
    },[])

   

    return (
        <View>
            <Header navigate={navigation}/>
            <FlatList
                contentContainerStyle={{backgroundColor:'#E8E8E8',marginTop:5}}
                data={repos}
                renderItem={({item}) => (
                    <Card style={styles.card}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Divider/>
                        <Text style={styles.cardText}>
                            {item.created} {"\n"}
                            {item.url}
                        </Text>
                    </Card>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    repoList:{
        marginLeft:10,
        marginRight:10
    },
    cardText:{
        fontSize:15,
        color:'black',
        textAlign:'left'
    },
    card:{
        marginTop:15,
        padding:10
    }
})