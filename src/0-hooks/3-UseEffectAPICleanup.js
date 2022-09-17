import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UseEffectAPICleanup() {
  return (
    <div>
      <Link to="/posts">Go to posts</Link>
    </div>
  );
}

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => setPosts(response.data));
    }

    return () => {
      console.log('Unsubscribed');
      subscribed = false;
    };
  }, []);

  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
