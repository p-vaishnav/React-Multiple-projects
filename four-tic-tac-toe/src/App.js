import React,{useState} from 'react';
import Icon from './components/icons/icon.js';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { Card,CardBody,Container,Button,Col,Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");
function App() {
    const [isCross,setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("Circle Wins");  
    const reloadGame = function(){
        setIsCross(false);
        setWinMessage("");
        itemArray.fill("empty");
    }

    const checkIsWinner = function(){
      //
    }

    const changeItem = function(itemNumber){
       
       if(winMessage){
          return toast(winMessage,{type:"success"});
       }//

       if(itemArray[itemNumber] === 'empty'){
            itemArray[itemNumber] = isCross ? "circle" : "cross";
            setIsCross(!isCross);
        }//if

        else{
          return toast('already filled',{type:"error"});
        }


       
    }

    return(
      <Container className="p-5">
        <ToastContainer position="bottom-center"/>
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div class="mb-3">
                <h1 class="text-center text-uppercase text-success" >
                  {winMessage}
                </h1>
                <Button color="primary" size="lg" block onClick={reloadGame}>Reload the game</Button>
              </div>
            ):(
              <h1 className = "text-center text-warning">{isCross?"Cross":"Circle"} turns</h1>
              )}
            <div className="grid">
              {itemArray.map(function(item,index){
                  return (<Card color="warning" onClick={()=>changeItem(index)}>
                            <CardBody className="box">
                                <Icon name={item}/>
                            </CardBody>
                        </Card>);
              })}
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default App;
