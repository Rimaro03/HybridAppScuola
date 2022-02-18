import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, SectionList, TextInput } from 'react-native';
import { Button, ButtonGroup, withTheme } from 'react-native-elements';
import {TodoList} from './todoList.jsx'

const todoList = require("./todo.json")

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List:</Text>
      <TodoList todoList={todoList}/>
      <SectionList style={styles.list}
        sections={todoList["completedTasks"]}
        renderItem={({ item }) => <Text style={styles.item} onPress={() => changeTaskStatus(item)}>{item}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}


const changeTaskStatus = (task) => {
  todoList.completedTasks.push(<Text style={styles.completedTask}>{task}</Text>)
  todoList.todoList.splice(todoList.todoList.indexOf(task), 1)
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
  list: {
    width: '100%',
  },
  sectionHeader: {
    fontFamily: 'Roboto',
    fontSize: 20,
    paddingTop: 10,
  },
  item: {
    fontFamily: 'Roboto',
    fontSize: 18,
    padding: 15,
    margin: 2,
    backgroundColor: "rgb(51,51,51)",
    color: "white",
  },
  completedTask: {
    fontFamily: 'Roboto',
    fontSize: 18,
    padding: 15,
    margin: 2,
    backgroundColor: "rgb(51,51,51)",
    color: "white",
    textDecorationLine: "line-through",
  },
});

/**
 *       <TextInput style={styles.input} placeholder="Type a task!" />
 * 
 *         renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title.toUpperCase()}</Text>
        )}
 * 
 *       <Button
        title="LOG IN"
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
      />
 */