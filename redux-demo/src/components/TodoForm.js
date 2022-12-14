import React, {useState} from 'react';

import {
    Container,
    Input,
    Button,
    Form,
    FormGroup,
    InputGroup,
    // InputGroupAddon
} from 'reactstrap';

// uuid part
import {v4} from 'uuid';

// redux
import {connect} from 'react-redux';
import {addTodo} from '../action/todo';

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();
        if(!title) {
            return alert('Please fill Todo');
        }

        const todo = {
            id: v4(),
            title
        };

        addTodo(todo);
        
        setTitle('');
    }

    return(
        <Form onSubmit={handleSumbit}>
            <FormGroup>
                <InputGroup>
                    <Input type='text' name='todo' id='todo' placeholder='Your next Todo'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    {/* <InputGroupAddon addonType='prepend'>  */}
                        <Button color='primary' onClick={handleSumbit}>ADD</Button>
                    {/* </InputGroupAddon> */}
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

// mapStateToProps, mapDispatchToProps

// mapping is done inorder to access props from one central state
const mapStateToProps = (state) => {
    return {};
}

// used for dispatching action, something weird I know, let read more of it
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        }
    }
}

// something weird too
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);