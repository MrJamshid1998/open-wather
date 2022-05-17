import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const DeleteLesson = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setPost(res.data);
            console.log(res);
        })
    }, [])

    function deletePost(){
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
            alert("Delete post!");
            setPost(null);
            console.log(res);
        });
    }
    if (!post) return "No Post!";

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={deletePost}>Delete post</button>
        </div>
    );
};

DeleteLesson.propTypes = {};

export default DeleteLesson;