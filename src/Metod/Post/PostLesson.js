import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button } from 'react-yandex-maps';

const PostLesson = () => {

    const [post, setPost] = useState(null);

    useEffect(()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",[])
        .then((response) => {
            setPost(response.data)
            console.log(response);
        } )
        .catch(console.error("Erorr"))
    }, [])

    function createPost() {
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: "Hello React",
            body: "Bu dars test uchun !"
        })    
        .then((response)=>{
            setPost(response.data);
        })
    }
    if(!post) return "Kuting..."
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create Post</button>
        </div>
    );
};

PostLesson.propTypes = {};

export default PostLesson;