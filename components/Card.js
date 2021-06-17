import React from "react";
import {View, StyleSheet} from "react-native";

const Card = (props)=>{
     return(
         <View style={{...styles.card,...props.style}}>
            {props.children}
         </View>
     )
}

const styles = StyleSheet.create({
    card:{
        elevation:4,
        shadowColor:"#eee",
        shadowOffset:{width:0,height:2},
        shadowRadius:20,
        shadowOpacity:.0,
        borderRadius:10
    }
});

export default Card;