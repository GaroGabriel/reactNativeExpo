import {Alert, StyleSheet, View,Text} from 'react-native';
import {AddTodo, NavBar} from "./src";
import Todo from "./src/Todo";
import {useState} from "react";


export default function App() {

    const [todos, setTodos] = useState([]);

    const addTodoHandler = (newTodoName) => {
        setTodos(prev=>[{key: Math.random().toString(), name: newTodoName},...prev])

    }
    return (
        <View style={styles.appWrapper}>
            <NavBar title='Todo App'/>
            <View style={styles.container}>
                <AddTodo addTodoHandler={addTodoHandler}/>

                {
                    todos.map(todo=>{
                        return(
                            <Todo todo={todo} key={todo.key}/>
                        )
                    })
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10
    }

});
