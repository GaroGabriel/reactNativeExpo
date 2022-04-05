import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert,Keyboard} from "react-native";
import {THEME} from "../theme";
import {AntDesign} from '@expo/vector-icons';


const AddTodo = ({addTodoHandler}) => {
    const [input, setInput] = useState('')
    const sendTodo = () => {
        if (input.length) {
            addTodoHandler(input)
            setInput('')
            Keyboard.dismiss()
        }

    }
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input}
                       onChangeText={text => setInput(text)}
                       value={input}
                       placeholder="add todo"
            />
            <AntDesign.Button
                color={THEME.WHITE_COLOR}
                onPress={sendTodo}
                name="addfile"
                style={styles.button}
            >add</AntDesign.Button>
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
        width: '60%'

    },
    button: {
        width: 120,
        backgroundColor: THEME.BLUE_COLOR,
    }
});
