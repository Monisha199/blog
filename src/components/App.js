import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
  
      <div className="container">
        <Navbar />
        <Routes>
          {/* <Route exact path="/" component={Home} />
          <Route path="/post/:postId" component={PostDetail} /> */}
          <Route path="/create-post" element={<CreatePost/>} />
        </Routes>
      </div>

  );
}

export default App;