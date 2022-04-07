import React, {useState, useContext} from 'react';
import {Alert, StyleSheet, View} from "react-native";
import {NavBar} from "./components/__index";
import MainScreen from "./screnns/MainScreen";
import TodoScreen from "./screnns/TodoScreen";
import {TodoContext} from "./context/todo/todoContext";
import {ScreenContext} from "./context/screen/screenContext";

const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo,} = useContext(TodoContext)
    const {todoId,changeScreen}=useContext(ScreenContext)

    let content = <MainScreen
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        onOpenHandler={changeScreen}
    />
    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen
            goBack={()=>changeScreen(null)}
            todo={selectedTodo}
            removeTodo={removeTodo}
            onSave={updateTodo}
        />
    }
    return (
        <View style={styles.appWrapper}>
            <NavBar title='Todo App'/>
            <View style={styles.content}>
                {content}
            </View>
        </View>
    );
};

export default MainLayout;

const styles = StyleSheet.create({
    appWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {

        width: '100%',
        paddingHorizontal: 10
    }

});
