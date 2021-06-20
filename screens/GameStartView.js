import React from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

const GameStartView = (props)=>{
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Start Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Enter a number</Text>
                <Input style={styles.input} keyboardType="numeric" blurOnSubmit maxLength={2} autoCorrect={false} autoCapitalize="none"/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={()=>{}} color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={()=>{}} color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center"
    },
    title:{
        paddingVertical:10,
        fontSize:20
    },
    inputContainer:{
        padding:20,
        width:300,
        maxWidth:"80%",
        alignItems:"center"
    },
    buttonContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        paddingHorizontal:15
    },
    button:{
        width:100
    },
    input:{
        width:50,
        textAlign:"center"
    }
});

export default GameStartView;