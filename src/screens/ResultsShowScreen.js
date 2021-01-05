import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ScrollView
} from 'react-native'
import yelp from '../api/yelp'
import {GMap} from 'primereact/gmap';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const ResultsShowScreen = ({navigation}) => {

    const [result,
        setResult] = useState(null)

    const id = navigation.getParam('id');

    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
        console.log(response.data)
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null
    }

    return (
        <View style={styles.background}>
            <Text style={styles.NameText}>{result.name}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{
                flexDirection: 'row'
            }}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                return <Image
                    style={styles.Image}
                    source={{
                    uri: item
                }}/>
            }}/>
            <Text>{result.location.address1}, {result.location.city}, {result.location.state}, {result.location.country}
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        marginLeft: 8
    },
    Image: {

        margin: 10,
        height: 150,
        width: 200,
        borderRadius: 5
    },
    NameText: {
        fontSize: 25
    },
    map : {
        flex: 1,
        height: 200,
        width: 200
    }
})

export default ResultsShowScreen
