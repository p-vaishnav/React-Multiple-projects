import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import {Container} from 'reactstrap';

// Provider
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo/>
        <TodoForm/>
      </Container>
    </Provider>
    
  );
}

export default App;
