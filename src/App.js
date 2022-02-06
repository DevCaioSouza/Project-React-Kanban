import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import TaskList from "./components/TaskList/TaskList"

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title, 
      state
    }
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    })
  }

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id){
          return {...task, title, state}
        }else {
          return task;
        }
      })
    })
  }

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id)
    })
  }

  return (
    <div className="App">
      <Navbar /> {/* Assim uma função é chamada no React.
          Fizemos aqui uma "Composição de componentes React" */}
      <div className='container'>
        <TaskList 
        title="Pendente" 
        onAddTask={addTask} 
        taskState="Pendente"
        tasks={tasks.filter((t) => t.state === "Pendente" )} 
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask} />

        <TaskList 
        title="Fazendo" 
        onAddTask={addTask}
        taskState="Fazendo" 
        tasks={tasks.filter((t) => t.state === "Fazendo")} 
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask} />

        <TaskList 
        title="Completa" 
        onAddTask={addTask} 
        taskState="Completa"
        tasks={tasks.filter((t) => t.state === "Completa")} 
        onTaskUpdate={updateTask}
        onDeleteTask={deleteTask} />
        
      </div>
    </div>
  );
}

export default App;

// palavras do professor:
// "Como manipular estado em aplicações react:
// Temos aqui no App.js o nosso container com todas as tarefas,
// nós temos uma função pra adicionar tarefa ao clicar no botão
// e temos o nosso componente TaskList encarregado de chamar essa função addTask"
