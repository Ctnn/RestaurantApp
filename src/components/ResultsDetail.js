import React from "react";
import {View,Image,Text,StyleSheet} from 'react-native';

const ResultsDetail= ({result})=> {
    return (<View style={styles.container}>
        <Image source= {{uri:result.image_url}} style={styles.image}/>
        <Text style={styles.name}>
       {result.name}
        </Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>);
}

const styles=StyleSheet.create({
    container:{
        marginLeft:20
    },
    image:{
        width:250,
        height:120,
        borderRadius:4
    },
    name:{
        fontWeight:'bold',

    }
});

export default ResultsDetail;