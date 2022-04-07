import React from 'react';
import {FlatList, ScrollView, StyleSheet, View, Image} from "react-native";
import {AddTodo, Todo} from "../components/__index";


const MainScreen = ({addTodo, todos, removeTodo, onOpenHandler}) => {
    let content = (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => {
                return (
                    <Todo
                        todo={item}
                        removeTodo={removeTodo}
                        onOpenHandler={onOpenHandler}
                    />
                )
            }}/>
    )
    if (!todos.length) {
        content = <View style={styles.imgWrapper}>
            <Image style={styles.img} source={require('../../assets/no-items.png')}/>
        </View>
    }


    return (
        <View style={styles.container}>
            <AddTodo addTodo={addTodo} style={styles.img}/>
            {content}
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',

    },
    imgWrapper: {
        alignItems: 'center',
        justifyContent: "center",
        height: 300,
        padding: 10,
        marginHorizontal: 30
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode:'contain'
    }
})
