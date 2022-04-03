import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const Todo = ({todo}) => {
    return (
        <View style={styles.todoWrapper}>
            <Text> {todo.name}</Text>
        </View>
    );
};

export default Todo;


const styles = StyleSheet.create({
    todoWrapper:{
        backgroundColor:'#fff',
        width:'100%',
        borderStyle:'solid',
        borderColor:'#000',
        borderRadius:5,
        borderWidth:1,
        padding:10,
        marginTop:20
    }
})
