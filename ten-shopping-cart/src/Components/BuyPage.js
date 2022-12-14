import React,{Profiler, useEffect, useState} from 'react';
import CartItem from './CartItem';
import {Card,CardImg,CardTitle,CardText, CardBody,Button,Row,Col} from 'reactstrap';
import  Axios from 'axios';
import random from 'faker';

const API_KEY = '563492ad6f91700001000001acc2e8e0e5de4796b2e6527bd7d94fb1';
// const url = "https://api.pexels.com/v1/search?query=nature&per_page=1";

// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const url = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";
const BuyPage = function({addToCart}){
    const [product,setProduct] = useState([]);
    let response = "";
    // const fetchPhotos = async function(){
    //     const data = await Axios.get(url,{
    //         header : {
    //             Authorization : API_KEY
    //         }
    //     });

    //     console.log(data);
    // }

    const fetchPhotos = async function(){
        response = await Axios.get(url);
        // console.log(response.data.photos);

        const {photos} = response.data;
        // console.log(photos);
        const allPhotos = photos.map((photo) =>({
            smallImage : photo.src.small,
            mediumImage : photo.src.medium,
            productId: photo.id,
            url:photo.photographer_url,
            productName:random.commerce.productName(),
            productPrice:random.commerce.price(),
            productDescription:random.commerce.productDescription()
        }));

        console.log(allPhotos);

        setProduct(allPhotos);
    } 

   

    useEffect(()=>{
        fetchPhotos();
    },[]);

    return(
        <div>
            <Row xs="2">
            {
                product.map((prod)=>{
                        return (
                                  <CartItem prod={prod} addToCart={addToCart} />
                                );
                })
            }
            </Row>
        </div>
    );

}

export default BuyPage;