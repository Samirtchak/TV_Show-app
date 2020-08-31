import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Card = (props) => {
    return (
         <View style={styles.Card}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )


}

const styles = StyleSheet.create({
  
    Card: {
        backgroundColor: "skyblue",
        width:150,
        height:150,
        marginRight:15,
        borderRadius:20,
        marginBottom:20
    
    }, 
    text: {
        color:"white",
        textAlign:"center",
        backgroundColor:"red",
        marginTop:"auto",
        marginBottom:"auto",
        fontSize:25,
    }   
    })

    export default Card;