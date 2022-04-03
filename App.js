import {Alert, StyleSheet, View, ScrollView, FlatList} from 'react-native';
import {AddTodo, NavBar} from "./src";
import Todo from "./src/Todo";
import {useState} from "react";


export default function App() {

    const [todos, setTodos] = useState([{key: Math.random().toString(), name: 'sssse'}]);

    const addTodoHandler = (newTodoName) => {
        setTodos(prev => [{key: Math.random().toString(), name: newTodoName}, ...prev])

    }
    return (
        <View style={styles.appWrapper}>
            <NavBar title='Todo App'/>
            <ScrollView style={styles.container}>
                <AddTodo addTodoHandler={addTodoHandler}/>
                <FlatList data={todos} renderItem={({item}) => {
                    return (
                        <Todo todo={item} key={item.key}/>
                    )
                }}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    appWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10
    }

});
