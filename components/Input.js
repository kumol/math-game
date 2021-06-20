import React from "react";

import { TextInput, View, StyleSheet } from "react-native";


const Input = props => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )
}

export default Input;

const styles = StyleSheet.create({
    input:{
        marginVertical:10,
        height:30,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
    }
})