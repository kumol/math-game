import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";

const Header = (props)=>{
     return(
         <View style={styles.header}>
             <Text style={styles.textView}>{props.title}</Text>
         </View>
     )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Colors.primary,
    },
    textView:{
        color:"black",
        fontSize:25
    }
});

export default Header;