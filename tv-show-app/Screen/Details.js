import React,{useState, useEffect} from 'react';
import {View,Text} from 'react-native';


const Details = ({route}) => {
    const [name, setName] = useState('');
    const {showName} = route.params

    const fetchData = async () => {
        const response = await fetch(`https://www.episodate.com/api/show-details?q=${showName}`,{
            method:'GET'
        })
        const data = await response.json();

        setName(data.tvShow.description);

    } 

    useEffect(() => {
        fetchData()   
    },[showName])

    return (
        <View>
            <Text>
                {name}
            </Text>
        </View>
    )
}

export default Details;