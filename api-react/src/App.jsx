import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   return (
    <div>
      <LoadPosts></LoadPosts>
      
    </div>
  )
}
function LoadPosts(){
// step - 1 

  const [posts,setPosts] = useState([]);
// step - 2 
 
  useEffect(() => {
// step - 3

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // step - 4 setPosts data use step -1
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h1>Posts : {posts.length} </h1>
      {/* dynamically each post show display  */}

      {
        posts.map(post => <Post title={post.title} body={post.title}></Post>)
      }
    </div>
  )
}
function Post(props){
  return(
    <div className='PostStyle'>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

export default App
