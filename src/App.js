import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import TaskList from "./components/TaskList/TaskList"

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Assim uma função é chamada no React.
          Fizemos aqui uma "Composição de componentes React" */}
      <div>
      <TaskList title="Pendente"/>
      <TaskList title="Fazendo"/>
      <TaskList title="Completa"/>
      </div>
    </div>
  );
}

export default App;
