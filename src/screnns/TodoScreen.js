import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from "react-native";
import {THEME} from "../theme";
import {FontAwesome,AntDesign}from '@expo/vector-icons'
import AppCard from "../components/UI/AppCard";
import {EditModal} from "../components/__index";
import AppTextBold from "../components/UI/AppTextBold";
import AppButton from "../components/UI/AppButton";

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
                <AppTextBold style={styles.title}>{todo.name}</AppTextBold>
                <AppButton onPress={() => {
                    setModal(true)
                }} color={THEME.BLUE_COLOR}>
                    <FontAwesome name="edit" size={24} color={THEME.WHITE_COLOR} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={goBack} color={THEME.BLUE_COLOR}>

                        <AntDesign name="back" size={24} color={THEME.WHITE_COLOR} />
                    </AppButton>

                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => deleteTodoHandler(todo.key)} color={THEME.DANGER_COLOR}>
                        <AntDesign name="delete" size={24} color={THEME.WHITE_COLOR} />

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
        width: Dimensions.get('window').width /3
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }

})
