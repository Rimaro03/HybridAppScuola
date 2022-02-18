import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, SectionList, TextInput, Image } from 'react-native';
import { useState } from 'react'
import { Button, ButtonGroup, withTheme } from 'react-native-elements';

const todoListJSON = require("./todo.json")

const TodoList = (props) => {
    const [todoList, setTodoList] = useState(props.list)

    const changeTaskStatus = (task) => {
        console.log(props)
        todoList.completedTasks.push(<Text style={styles.completedTask}>{task}</Text>)
        todoList.lists.splice(todoList.lists.indexOf(task), 1)
    }

    return (
        <SectionList
            style={styles.list}
            sections={props.list.lists}
            renderItem={({ item }) => (
                <Text style={styles.item} onPress={() => changeTaskStatus(item)}>
                    <Image source={require('./assets/unchecked.png')} style={styles.checkbox} />
                    {item}
                </Text>
            )}
            keyExtractor={(item, index) => index}
        />

    );
};

const CompletedTasks = (props) => {
    const [todoList, setTodoList] = useState(props.list)

    const changeTaskStatus = (task) => {
        console.log(props)
        /*todoList.completedTasks.push(<Text style={styles.completedTask}>{task}</Text>)
        todoList.lists.splice(todoList.lists.indexOf(task), 1)*/
    }

    return (
        <SectionList
            style={styles.list}
            sections={props.list.CompletedTasks}
            renderItem={({ item }) => (
                <Text style={styles.item} onPress={() => changeTaskStatus(item)}>
                    <Image source={require('./assets/checked.png')} style={styles.checkbox} />
                    {item}
                </Text>
            )}
            keyExtractor={(item, index) => index}
        />

    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List:</Text>
            <TodoList list={todoListJSON} />
            <Text style={styles.title}>Completed tasks:</Text>
            <CompletedTasks list={todoListJSON} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        padding: 10,

    },
    item: {
        margin: 6,
        fontFamily: 'Roboto',
        padding: 5,
        fontSize: 18,
        height: 44,
        backgroundColor: "rgb(51,51,51)",
    },
});