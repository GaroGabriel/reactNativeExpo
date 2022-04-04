import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet , Alert} from "react-native";
import {THEME} from "../theme";


const AddTodo = ({addTodoHandler}) => {
const [input,setInput]= useState('')
const sendTodo = ()=>{
    if(input.length){
        addTodoHandler(input)
        setInput('')
    }

}
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input}
                       onChangeText={text=>setInput(text)}
                       value={input}
                       placeholder="add todo"
                       />
            <Button
                colOR={THEME.BLUE_COLOR}
                onPress={sendTodo}
                title='add'
                style={styles.button}/>
        </View>
    );
};

export default AddTodo;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    input: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: THEME.BLACK_COLOR,
        width: '80%'

    },
    button: {
        width: 200,
        backgroundColor: THEME.BLACK_COLOR,


    }
});
