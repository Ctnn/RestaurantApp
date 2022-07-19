import React from "react";
import {View,Text,StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results,navigation }) => {
 
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={result => result.id}
          renderItem={({ item }) => {
            return(
                <TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id:item.id})}>
            <ResultsDetail result={item} />
            </TouchableOpacity>);
          }}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  });
  
  export default withNavigation(ResultsList);