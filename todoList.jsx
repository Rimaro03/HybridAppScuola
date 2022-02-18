import React, { useState } from "react";

const TodoList = (todoList) => {
  const [todos, setTodos] = useState([]);

  addTask = (e) => {
    const task = e.target.value;
    console.log(task);
    setTodos([todos, task]);
  };

  return (
    <SectionList
      style={styles.list}
      sections={todoList["todoList"]}
      renderItem={({ item }) => (
        <Text style={styles.item} onPress={() => changeTaskStatus(item)}>
          {item}
        </Text>
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default TodoList;
