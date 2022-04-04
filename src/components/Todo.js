import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const Todo = ({todo,deleteTodoHandler,onOpenHandler}) => {
    return (
        <TouchableOpacity
            onLongPress={()=> deleteTodoHandler(todo.key)}
            onPress={()=>{onOpenHandler(todo.key)}}
        >
            <View style={styles.todoWrapper}>
                <Text> {todo.name}</Text>
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
