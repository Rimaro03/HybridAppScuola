import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, ScrollView, SectionList, TextInput, Image } from 'react-native';
import { React, useState } from 'react'
import { Button, ButtonGroup, withTheme } from 'react-native-elements';
import { readDatas } from './functions/readDatas'
import { storeDatas } from './functions/storeDatas';
import { ButtonObj } from './components/ButtonObj';
import { TodoList } from './components/TodoList';
import { CompletedTasks } from './components/CompletedTasks';

const todoListJSON = require("./todo.json")

const AddSomething = React.forwardRef((props, ref) => (
    <TextInput
        ref={ref}
    />
));

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.listsContainer}>
                <TodoList list={todoListJSON} />
                <CompletedTasks list={todoListJSON} />
            </View>
            <View style={styles.bottomMenu}>
                <ButtonObj />
            </View>
            <View>
                <AddSomething
                    textChange={textInput => this.setState({ textInput })}
                    addNewItem={this.addItem.bind(this)}
                    textInput={this.state.textInput}
                    ref={(ref) => { this.textInputField = ref }}
                />
                <FloatingButton tapToAddHandler={this.onFloatingButtonPress.bind(this)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width: '100%',
        height: '94%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listsContainer: {
        width: '100%',
        padding: 0,
        margin: 0,
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
    bottomMenu: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
});