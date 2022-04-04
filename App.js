import {StyleSheet, View,Alert} from 'react-native';
import {NavBar} from "./src/components/__index";

import {useState} from "react";
import MainScreen from "./src/screnns/MainScreen";
import TodoScreen from "./src/screnns/TodoScreen";


export default function App() {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([{key: Math.random().toString(), name: 'sssse'}]);

    const addTodoHandler = (newTodoName) => {
        setTodos(prev => [{key: Math.random().toString(), name: newTodoName}, ...prev])
    }
    const deleteTodoHandler = (todoId) => {
       const deleteTodo =  todos.filter(t=>t.key === todoId)
        Alert.alert(
            "Do you want to delete ?",
            `${deleteTodo[0].name}`,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => {
                        setTodoId(null)
                        setTodos(prev => prev.filter(t => t.key !== todoId))
                    }}
            ]
        );


    }
    const  onOpenHandler = (id) => {
        setTodoId(id)

    }
    const  goBackHandler = () => {
        setTodoId(null)
    }

    const updateTodo = (id,title) => {
        console.log(id,title)
        setTodos(prev=>prev.map(todo=>{
            if(todo.key === id){
                todo.name = title
            }
            return todo
        }))
    }

    let content = <MainScreen
        todos={todos}
        addTodoHandler={addTodoHandler}
        deleteTodoHandler={deleteTodoHandler}
        onOpenHandler={onOpenHandler}
    />
    if (todoId) {
        const selectedTodo = todos.find(todo=>todo.key === todoId)
        content = <TodoScreen
            goBack={goBackHandler}
            todo={selectedTodo}
            deleteTodoHandler={deleteTodoHandler}
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
}

const styles = StyleSheet.create({
    appWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{

            width: '100%',
            paddingHorizontal: 10
    }

});
