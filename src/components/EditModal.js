import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal,Alert} from "react-native";
import {THEME} from "../theme";


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
                    <Button title='cancel' onPress={oncancel} color={THEME.DANGER_COLOR}/>
                    <Button title='save' color={THEME.BLUE_COLOR} onPress={() => {
                        saveHandler()
                    }}/>
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
