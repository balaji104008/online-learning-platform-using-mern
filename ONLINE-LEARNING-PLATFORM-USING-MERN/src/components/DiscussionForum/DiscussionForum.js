import React, { useState, useEffect } from 'react';

const DiscussionForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetch('/api/forum')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const addPost = async () => {
    const response = await fetch('/api/forum', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newPost })
    });
    const data = await response.json();
    setPosts([...posts, data]);
    setNewPost('');
  };

  return (
    <div>
      <h2>Discussion Forum</h2>
      <textarea value={newPost} onChange={(e) => setNewPost(e.target.value)}></textarea>
      <button onClick={addPost}>Post</button>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DiscussionForum;
