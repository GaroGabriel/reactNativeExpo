import React from 'react';
import {FlatList, ScrollView, StyleSheet,  View} from "react-native";
import {AddTodo,Todo} from "../components/__index";


const MainScreen = ({addTodoHandler,todos,deleteTodoHandler,onOpenHandler}) => {

    return (
            <ScrollView style={styles.container}>
                <AddTodo addTodoHandler={addTodoHandler}/>
                <FlatList
                    keyExtractor={item => item.key.toString()}
                    data={todos}
                    renderItem={({item}) => {
                        return (
                            <Todo
                                todo={item}
                                deleteTodoHandler={deleteTodoHandler}
                                onOpenHandler={onOpenHandler}
                            />
                        )
                    }}/>
            </ScrollView>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',

    }
})
