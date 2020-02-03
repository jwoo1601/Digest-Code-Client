import React, { useState, useEffect } from 'react';
import PostBoard from '../Components/PostBoard';

export default function View(props) {
    let [posts, setPosts] = useState([ ]);

    useEffect(() => {
        fetch("http://www.mocky.io/v2/5e0bdc1d330000dac620aa4f", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => { setPosts(data.posts); });
    });

    return (
        <PostBoard posts={posts} />
    );
}