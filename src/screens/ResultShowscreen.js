import React,{useEffect, useState} from "react";
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from "../api/yelp";

const ResultShowScreen=({navigation})=>{

const [result,setResult]=useState(null);
const id=navigation.getParam('id');
console.log(id);

const getResult=async id=>{
  const response= await yelp.get(`/${id}`);
   setResult(response.data);
};

useEffect(()=>{
getResult(id);
},[]);

if(!result)
{
    return null;
}

return (<View>
<Text style={styles.style}>{result.name}</Text>
<FlatList
data={result.photos}
keyExtractor={(photo)=>photo}
renderItem={({item})=>{
return <Image
style={styles.image}
source={{uri:item}}
/>
}}
/>

</View>);
};

const styles=StyleSheet.create({
text:{
fontSize:12,
},
image:{
    height:200,
    width:300,
}
    
});

export default ResultShowScreen;