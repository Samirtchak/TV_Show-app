import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Image,Text, ScrollView,TouchableOpacity} from 'react-native';


const Show = ({navigation}) => {
    const [shows,setShows] = useState([]);
    const fetchData = async () => {
       const resolve = await fetch("https://www.episodate.com/api/most-popular?page=1")
        const data = await resolve.json();
        setShows(data.tv_shows);


    }
    console.log(shows)
    useEffect(() => {
        fetchData()
    },[])

 

    return (
        <View>
         <ScrollView>   
         {  shows.map( show =>
                <TouchableOpacity onPress={() => navigation.navigate('Details',{showName:show.permalink})}>
                <View key={show.id} style={styles.item}>
                <Image style={{width:60,height:"100%"}} source={{uri:show.image_thumbnail_path}}/> 
                <Text style={styles.text}>{show.name}</Text> 
                </View> 
                </TouchableOpacity> 
                )
         }
         </ScrollView>
                 
                    
        </View>

        
    )
        }
    

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderStyle:"solid",
        marginTop:20,
        flexDirection:"row",
        padding:10
        
    },
    item: {
        flex:1,
        flexDirection:"row",
        height:100,
        backgroundColor:"grey",
        marginTop:20,
        marginHorizontal:10
    },
    text: {
        fontSize:25
    }

})

export default Show;