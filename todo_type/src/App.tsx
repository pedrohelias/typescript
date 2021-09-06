import React, {FC, ChangeEvent, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoTask from "./Components/TodoTask"
import {Itask} from "./interfaces"
const App: FC = () => {

  const [task, SetTask] = useState<string>("")
  const [number1, SetNumber] = useState<number>(0)
  const [task2, SetTask2] = useState<string>("")
  const [task3, SetTask3] = useState<string>("")
  const [task4, SetTask4] = useState<Itask[]>([]) //vai ser uma lista

  const handleChange = (event: ChangeEvent<HTMLInputElement> ):void => {
    if(event.target.name === "task"){
      SetTask(event.target.value)
    }else {
      SetNumber(Number(event.target.value))
    }
  }
  
  const AddTask = ():void => {
    const newTask = {taskName: task, numero: number1, taskName2: task2, taskName3: task3}
    SetTask4([...task4,newTask])
    console.log(task4)
    SetTask("")
    SetNumber(0)
    SetTask2("")
    SetTask3("")

  }
  return (
    <div className="App">
      <div className="Header">
        <div className="inputContainer">
          <input type="text" placeholder="texto aqui" name="task" onChange={handleChange} value={task}></input>
          <input type="number" placeholder="numero aqui" name="numero" value = {number1}></input>
          <input type="text" placeholder="texto aqui" name = "task2" value = {task2}></input>
          <input type="text" placeholder="texto aqui" name = "task3" value = {task3}></input>
          
        </div>
        <button onClick={AddTask} className="botao">Add Task</button>
      </div>
      <div className="todoList">


        {task4.map((task: Itask, key: number)=>{
          return <TodoTask key = {key} task = {task}></TodoTask>


        })}
      </div>


    </div>
  );
}

export default App;
