import React from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import AppText from "./UI/AppText";

const Todo = ({todo,removeTodo,onOpenHandler}) => {
    return (
        <TouchableOpacity
            onLongPress={()=> {
                removeTodo(todo.id)
            }}
            onPress={()=>{onOpenHandler(todo.id)}}
        >
            <View style={styles.todoWrapper}>
                <AppText> {todo.title}</AppText>
            </View>
        </TouchableOpacity>
    );
};

export default Todo;


const styles = StyleSheet.create({
    todoWrapper: {
        backgroundColor: '#fff',
        width: '100%',
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        marginTop: 20
    }
})
