import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios';
import CardComp from './Card';

function App() {
  const [details,setDetails] = useState({});
  
  const fetchDetails = async function(){
    const {data} = await Axios.get('https://randomuser.me/api/');
    //console.log(data);

    const details = data.results[0];
    console.log('details : ',details);
    console.log(details.picture.large);
    setDetails(details);
  }

  useEffect(()=>{
    fetchDetails();
  },[])

  return (
    <Container fluid className="p-4 bg-primary App">
        <Row>
          <Col md={4} className="offset-md-4 mt-4">
            <CardComp details={details} />
          </Col>
        </Row>
    </Container>
  );
}

export default App;
