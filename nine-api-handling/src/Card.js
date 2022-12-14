import React from 'react';
import {Card,CardBody,CardTitle,CardText} from 'reactstrap';
import {FaEnvelope , FaMapMarkedAlt , FaPhone} from 'react-icons/fa';


const CardComp = function({details}){
    return(
        <Card>
            <CardBody className="text-center">
                <img 
                    height="150"
                    width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large}
                />
            </CardBody>
            <CardBody className="text-primary">
                <h1>
                    <span>    {   details.name?.title}  </span>
                    <span>{details.name?.first} {details.name?.last}</span>
                </h1>
            </CardBody>
        </Card>
    );
}

export default CardComp;