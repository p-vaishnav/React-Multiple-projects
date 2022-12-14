import React ,{useState, useContext}from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import {v4} from 'uuid';


const TodoForm = function({addtodos}){
    const [todoString,setTodoString] = useState("");
    const handleSubmit = function(){
        if(todoString === ""){
            return alert('Please enetr some todo');
        }//if

        let todo = {
            todoString,
            id:v4()
        }

        addtodos(todo);
        setTodoString("");

    }//handleSubmit
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <InputGroup>
                        <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter text"
                        onChange={e=>{setTodoString(e.target.value)}}/>
                        <InputGroupAddon addonType="append">
                            <Button color="success">Add Todo</Button>
                        </InputGroupAddon>
                    </InputGroup>
            </FormGroup>
        </Form>
    );
}//function

export default TodoForm;