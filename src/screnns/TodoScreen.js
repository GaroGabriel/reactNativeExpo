import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from "react-native";
import {THEME} from "../theme";
import AppCard from "../components/UI/AppCard";
import {EditModal} from "../components/__index";

const TodoScreen = ({goBack, todo, deleteTodoHandler,onSave}) => {


    const [modal, setModal] = useState(false)
    const saveHandler = (title)=>{
        onSave(todo.key,title)
        setModal(false)
    }
    return (
        <View>
            <EditModal
                value={todo.name}
                visible={modal}
                oncancel={()=>setModal(false)}
                onSave={saveHandler}

            />
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.name}</Text>
                <Button title='Edit' onPress={() => {
                    setModal(true)
                }}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title='back'
                        onPress={goBack}
                        color={THEME.GRAY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button
                        title='Delete'
                        onPress={() => deleteTodoHandler(todo.key)} color={THEME.DANGER_COLOR}/>
                </View>
            </View>
        </View>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '45%'
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }

})
