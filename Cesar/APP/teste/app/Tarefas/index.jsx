import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TaskListApp = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Ir pra escola', completed: false },
    { id: '2', text: 'Escovar o dente', completed: true },
    { id: '3', text: 'Trabalhar', completed: false },
    { id: '4', text: 'Ir pra academia', completed: true },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
      <View style={styles.taskContainer}>
        <Text style={[styles.taskText, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  listContainer: {
    width: '100%',
    maxWidth: 400,
  },
  taskContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});

export default TaskListApp;
