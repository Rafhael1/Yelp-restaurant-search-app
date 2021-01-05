import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View  style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search" 
            style={styles.inputStyle} 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f0EEEE',
        height: 50,
        borderRadius: 10,
        margin: 12,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        paddingHorizontal: 5 
    }
})

export default SearchBar;