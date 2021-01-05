import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchLocation = ({location, onLocationChange, onLocationSubmit}) => {
    return (
        <View  style={styles.background}>
            <MaterialIcons name="location-city" style={styles.iconStyle}/>
            <TextInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter a City" 
            style={styles.inputStyle} 
            value={location}
            onChangeText={onLocationChange}
            onEndEditing={onLocationSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0EEEE',
        height: 30,
        width: 200,
        borderRadius: 10,
        marginLeft: 12,
        marginRight: 12,
        marginTop: -2,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 15
    },
    iconStyle: {
        fontSize: 15,
        alignSelf: 'center',
        paddingHorizontal: 5 
    }
})

export default SearchLocation;