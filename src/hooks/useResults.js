import React, {Component, useEffect, useState} from 'react'
import yelp from '../api/yelp';
import { StyleSheet, Text, View, SafeAreaView, PermissionsAndroid, Button } from "react-native";


export default() => {

    const [results,
        setResults] = useState([]);
    const [errorMessage,
        setErrorMessage] = useState('');



    const searchApi = async(searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location:  'toronto'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong')
            console.log(err)
        }
    };

    useEffect(() => {
        searchApi('burger');
        

    }, [])

    return [searchApi, results, errorMessage]

}