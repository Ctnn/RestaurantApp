import React from "react";
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
//İstediğini curly'ye yaz

function SearchBar(){
    return <View style={styles.backgroundStyle}>
<Feather name="search" style={styles.iconStyle}/>
<TextInput 
style={styles.TextInput}
placeholder="Search"
/>

    </View>;
}

const styles=StyleSheet.create({
backgroundStyle:{
    marginTop:15,
backgroundColor:'#F0EEEE',
height:50,
borderRadius:5,
marginHorizontal:15,
flexDirection:'row',

},
inputStyle:{
    borderColor:'black',
    borderWidth:1,
    flex:1,
    fontsize:18
},
iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:15
}

})

export default SearchBar;