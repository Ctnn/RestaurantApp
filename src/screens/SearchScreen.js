import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen =()=> {
  //props == navigation == whatever  
  // I was used previous code view in the ResultsList navigation={navigation}
  const [term, setTerm] = useState('');
  const[searchApi,results,errorMessage]=useResults();


  const filterREsultsByPrice = (price)=>{
      //price == '$' || price== '$$' || price='$$$'
      return results.filter(result=>{
        return result.price===price;
      })
      };
   return (
    //Flex mean vertical page 
    //One more trick is View companent equal empty elements
    // What is the empty element ?  
    //Here it's empty elements mean you create a blank angel with closed elements and  this is it.
    // <> </>
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
      <ResultsList 
          results={filterREsultsByPrice('$')} 
          title="Cost Effective"
          />
      <ResultsList
       results={filterREsultsByPrice('$$')}
        title="Bit Pricier"
        />
      <ResultsList results={filterREsultsByPrice('$$$')} 
       title="Big Spender"
       />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
