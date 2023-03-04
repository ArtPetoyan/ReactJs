import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useState } from "react";
import TodoForm from './Components/Todos/TodoForm';
import TodoList from './Components/Todos/TodoList';

function App() {
  let [value, setValue] = useState('');
  let [input, setInput] = useState([]);
  function Change(e) {
    setValue({
      text: e.target.value,
      isCompleted: false,
      id: uuidv4(),
    });
  } 
	function Create(event) {
		event.preventDefault();
    if(!value.text.trim()) {
      alert('Write something...');
      return;
    }
    setInput([...input, value]);
		setValue({text: ''});
	}
  function deleteTodoHandler(id) {
    setInput(input.filter((todos) => todos.id !== id))
  }
  function checkTodoHandler(id) {
    setInput(input.map(el => {
      if(el.id === id) {
        el.isCompleted = !el.isCompleted ? true : false;
        return el;
      }
      return el;
    }));
  }
  return (
    <div className="App">
      <TodoForm 
        value={value.text} 
        onClick={Create} 
        onChange={Change}
      />
      <TodoList 
        value={input} 
        deleteHandler={deleteTodoHandler}
        check={checkTodoHandler}
      />
    </div>
  );
}

export default App;
