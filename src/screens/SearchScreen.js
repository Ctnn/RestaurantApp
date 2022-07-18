import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet, Button} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp"

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
    //buradaki [] nedeni api içerisindeki 'bussiness:[] içerisindeki
    //verileri çekerek onları kullanmak adına yapılan bir useState

  const searchApi = async searchTerm => {
    //async or yelp.get('/seach').then but first option make sense
    console.log('Hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log("this is  the error=>  "+err);
      setErrorMessage('Something went wrong');
    }
  };

  
  //Call searchApi when component
  //is first rendered. BAD CODE !
  // searchapi('pasta')
  //It would be run a many mant times
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
