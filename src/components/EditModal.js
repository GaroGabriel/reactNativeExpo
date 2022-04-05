import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal,Alert} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {THEME} from "../theme";
import AppButton from "./UI/AppButton";


const EditModal = ({visible, oncancel, value, onSave}) => {
    const [title, setTitle] = useState(value)
    const saveHandler = () => {
        if (title.trim().length < 3) {
Alert.alert('not correct',`min length is 3 now is ${title.trim().length}`)
        }else{
            onSave(title)

        }
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder='edit name'
                    autoCapitalize='none'
                    autoCorrect={false}/>
                <View style={styles.buttons}>
                    <AppButton onPress={oncancel} color={THEME.DANGER_COLOR}>
                        <MaterialIcons name="cancel" size={24} color={THEME.WHITE_COLOR} />
                    </AppButton>
                    {/*<Button title='cancel' onPress={oncancel} color={THEME.DANGER_COLOR}/>*/}
                    {/*<Button title='save' color={THEME.BLUE_COLOR} onPress={() => {*/}
                    {/*    saveHandler()*/}
                    {/*}}/>*/}

                    <AppButton onPress={() => {
                        saveHandler()
                    }} color={THEME.BLUE_COLOR}>
                        <MaterialIcons name="save" size={24} color={THEME.WHITE_COLOR} />
                    </AppButton>
                </View>
            </View>
        </Modal>
    );
};

export default EditModal;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.BLACK_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: "space-around"
    }
})
