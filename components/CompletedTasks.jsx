import {View, Text, SectionList, Image, StyleSheet} from 'react-native';
import { useState } from 'react';

export const CompletedTasks = (props) => {
    const [todoList, setTodoList] = useState(props.list)

    const changeTaskStatus = (task) => {
        console.log(props)
        /*todoList.completedTasks.push(<Text style={styles.completedTask}>{task}</Text>)
        todoList.lists.splice(todoList.lists.indexOf(task), 1)*/
    }

    return (
        <View>
            <Text style={styles.title}>Completed tasks:</Text>
            <SectionList
                style={styles.list}
                sections={props.list.CompletedTasks}
                renderItem={({ item }) => (
                    <Text style={styles.item} onPress={() => changeTaskStatus(item)}>
                        <Image source={require('../assets/checked.png')} style={styles.checkbox} />
                        {item}
                    </Text>
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20,
      padding: 10,
    },
    item: {
      margin: 6,
      fontFamily: "Roboto",
      padding: 5,
      fontSize: 18,
      height: 44,
      backgroundColor: "rgb(51,51,51)",
    },
  });
  