import React from 'react';
import {View,StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import Card from '../components/Card'



const Home = ({navigation}) => {
    const categories = ["Drama","Action","Comedy","Crime","Adventure","Fantasy","Science Fiction","Thriller"]

    
    return(
        <View>  
         <ScrollView>    
         <View style={styles.CardContainer}>
            {  categories.map( category => 
                <TouchableOpacity onPress={() => navigation.navigate('Series',{categ: category})}>
                    <Card title={category}/>
                </TouchableOpacity>
            )
          }
         </View>
         </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    CardContainer: {
        marginTop:70,
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center"

    },
   
})



export default Home;