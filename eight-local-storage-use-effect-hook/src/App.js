import React,{useEffect, useState} from 'react';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TodoForm  from './components/TodoForm';
import Todos from './components/Todos';

const App = function(){
  const [todos,setToDos] =  useState([]);
  
  useEffect(()=>{
    let localtodos = localStorage.getItem('todos');
    if(localtodos){
        setToDos(JSON.parse(localtodos));
    }
  },[]);

  const addtodos = async todo =>{
    setToDos([...todos,todo]);
    console.log(todos);
  }//addtodos

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  const markComplete = function(id){
      setToDos(todos.filter(todo => todo.id !== id))
  }//markComplete
  
  return(
    <Container fluid>
      <h1>To do with local storage</h1>
      <Todos todos={todos} markComplete={markComplete}/>
      <TodoForm addtodos={addtodos}/>
    </Container>
  );
}

export default App;