import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {

  
    return (
        <View style={styles.Container} >
            <Image style={styles.Image} source={{ uri: result.image_url }} />
            <Text style={styles.Name} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginLeft: 5,
        padding: 8
    },
    Image: {
        height: 170,
        width: 190,
        borderRadius: 5,
    },
    Name: {
        fontWeight: 'bold',
        padding: 3
    }
});

export default ResultsDetail;