import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {FaCheckDouble} from 'react-icons/fa';

// redux
import {connect} from 'react-redux';
import {removeTodo} from '../action/todo'


const Todo = ({todos, markComplete}) => {
    return(
        <ListGroup className='mt-5 mb-2'>
            {
                todos.map((todo) => {
                    return (
                        <ListGroupItem key={todo.id}>
                            {todo.title}
                            <span className='float-right' onClick={(e, id = todo.id) => {
                                console.log('id');
                                markComplete(id)
                            }}>
                                <FaCheckDouble/>
                            </span>
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        markComplete: (id) => {
            return dispatch(removeTodo(id));
        }
    }
}
// returns higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Todo);