import React,{useState,useEffect} from 'react';

const UseEffect = () => {
    const [post, setPost] = useState("");
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${post}`)
            .then(response => response.json())
            .then(json => setItems(json));
    },[post])
    return(
        <>
            <button onClick={() => setPost("posts")}>Posts</button>
            <button onClick={() => setPost("users")}>Users</button>
            <button onClick={() => setPost("comments")}>Comments</button>
            <h1>{post}</h1>
            {items.map((item)=>{
                return JSON.stringify(item);
            })}
        </>
    );
}

export default UseEffect;