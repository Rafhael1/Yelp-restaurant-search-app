import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import SearchLocation from '../components/SearchLocation';


const SearchScreen = ({navigation}) => {

    const [location, setLocation] = useState('');
   

    return (
              
        <View>
           <SearchLocation 
            location={location}
            onTermChange={setLocation} 
            onTermSubmit={() => searchApi(location)}
            />        

            <Button onPress={() => navigation.navigate('Search')} title="Go" />
        
        </View>
    )
}

const styles = StyleSheet.create({
})

export default SearchScreen;