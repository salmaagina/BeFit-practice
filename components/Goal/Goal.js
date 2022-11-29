import React from "react";
import { View,Text, StyleSheet, Button, TextInput, } from "react-native";

export default function Goals(){
    const DummyText=()=>{
        const[text,onChangeText]=React.useState
        ("Usless Text");
        const[number,onChangeNumber]=React.useState(null);
    }
    return(
        <View style={StyleSheet.container}>
            <View>
                <TextInput/>
               
            </View>
            <View>
               <Text> add your goals</Text> 
            </View>
        </View>

    );
}
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'space-between'
        
    }
})