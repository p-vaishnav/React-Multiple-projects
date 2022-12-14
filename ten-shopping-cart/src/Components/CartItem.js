import React from 'react';
import {
     Col,
     Card,
     CardImg,
     CardBody,
     CardTitle,
     CardText,
     Button,
} from 'reactstrap';

const CartItem = function({prod},{addToCart}){
    return(
        <Col md="4" key={prod.id}>                                    
            <Card className="mt-2 mb-1">
                <CardImg top width="100" height="250" src={prod.smallImage} />
                <CardBody className="text-center">
                <CardTitle tag="h2">{prod.productName}</CardTitle>
                <CardText>Product Price : {prod.productPrice}</CardText>
                <Button color="primary" size="sm" className="center"
                onClick={() =>{
                    console.log(addToCart);
                    addToCart();
                }}>BuyMe!!</Button>
                </CardBody>
            </Card>
        </Col>
    );
}

export default CartItem;
