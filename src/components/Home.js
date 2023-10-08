import {useEffect, useState} from 'react';
import {firestore} from '../firebase';
import {Link} from 'react-router-dom';

function Home() {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    firestore.collection('posts').get().then((snapshot)=>{
      const posts = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id']=doc.id;
        return data
      })
      setPosts(posts)
    })
  },[])
    return (
      <div className="home">
        <h1>Tech Blog</h1>
        <div id="blog-by">Monisha</div>
        {posts.map((post,index)=>(
          <div className='post' key={`post-${index}`}>
            <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
            <p>{post.subTitle}</p>
          </div>
        ))}
        {/* home */}
      </div>
    );
  }
  
export default Home;
  
