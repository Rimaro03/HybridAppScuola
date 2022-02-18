import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, SectionList, TextInput} from 'react-native';
import {useState} from 'react'
import { Button, ButtonGroup, withTheme } from 'react-native-elements';

const todoListJSON = require("./todo.json")

const TodoList = (props) => {
    const [todoList, setTodoList] = useState(props.list.lists)

    const changeTaskStatus = (task) => {
        todoList.completedTasks.push(<Text style={styles.completedTask}>{task}</Text>)
        todoList.todoList.splice(todoList.todoList.indexOf(task), 1)
    }

    return (
        <SectionList
            style={styles.list}
            sections={props.list.lists}
            renderItem={({ item }) => (
                <Text style={styles.item} onPress={() => changeTaskStatus(item)}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width: '100%',
    },
});