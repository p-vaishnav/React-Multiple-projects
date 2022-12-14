import React,{useState} from 'react';
import './App.css';
import Icon from './components/icons/icon.js';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import 'bootstrap/dist/css/bootstrap.css';
import { Card,CardBody,Container,Button,Col,Row } from 'reactstrap';

const itemArray = new Array(9).fill("empty");
function App() {
    const [isCross,setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("");  
    const reload = function(){

    }

    const checkIsWinner = function(){

    }

    const changeItem = function(itemNumber){

    }

    return(
      <Container className="p-5">
        <ToastContainer position="bottom-center">
          <Row>
            <Col md={6} className="offset-md-3">
              <div>
                {itemArray.map((item,index)=>(
                    <Card>
                      <CardBody className="box">
                          <Icon name={item}></Icon>
                      </CardBody>
                    </Card>
                ))}
              </div>
            </Col>
          </Row>
        </ToastContainer>
      </Container>
    );
}

export default App;
