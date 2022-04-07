import React, {useState, useContext} from 'react';
import {StyleSheet, View, Text, Dimensions} from "react-native";
import {THEME} from "../theme";
import {FontAwesome, AntDesign} from '@expo/vector-icons'
import AppCard from "../components/UI/AppCard";
import {EditModal} from "../components/__index";
import AppTextBold from "../components/UI/AppTextBold";
import AppButton from "../components/UI/AppButton";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";

const TodoScreen = ({goBack}) => {
    const {todos,updateTodo,removeTodo} = useContext(TodoContext)
    const {todoId,changeScreen} = useContext(ScreenContext)
    const todo = todos.find(t => t.id === todoId)


    const [modal, setModal] = useState(false)
    const saveHandler = (title) => {
        updateTodo(todo.id, title)
        setModal(false)
    }
    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                oncancel={() => setModal(false)}
                onSave={saveHandler}

            />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => {
                    setModal(true)
                }} color={THEME.BLUE_COLOR}>
                    <FontAwesome name="edit" size={24} color={THEME.WHITE_COLOR}/>
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={()=>changeScreen(null)} color={THEME.BLUE_COLOR}>

                        <AntDesign name="back" size={24} color={THEME.WHITE_COLOR}/>
                    </AppButton>

                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => {
                        removeTodo(todo.id)
                    }} color={THEME.DANGER_COLOR}>
                        <AntDesign name="delete" size={24} color={THEME.WHITE_COLOR}/>

                    </AppButton>
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
        width: Dimensions.get('window').width / 3
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }

})
