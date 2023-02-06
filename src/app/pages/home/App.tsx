import { useEffect, useState } from 'react';

import { PostService } from '../../../setup/services/post.service';
import { CreatePostForm } from '../../components/createPostForm';
import { UpdatePostForm } from '../../components/updatePostForm';

import './App.css';

function App() {
  const [postsList, setPostList] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState('');

  const postService = new PostService();

  useEffect(() => {
    postService.getAll(setPostList);
  }, [])

  return (
    <div className="App">
      <h1>Firebase crud</h1>
      <br />
      <h3>Create post</h3>
      <CreatePostForm/>
      <br />
      <h3>Update post</h3>
      <UpdatePostForm postId={selectedPostId}/>
      <p>posts</p>
      {postsList.map((post: any) => (<article key={post.id}>
        <p>{post.name}</p>
        <p>{post.owner}</p>
        <button onClick={() => setSelectedPostId(post.id)}>Update</button>
        <button onClick={() => postService.delete(post.id)}>Delete</button>
      </article>))}
    </div>
  )
}

export default App
