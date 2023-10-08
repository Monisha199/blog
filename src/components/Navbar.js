// import {Link,NavLink} from 'react-router-dom';
// function Navbar() {
//     return (
//       <div>
//         <ul type="none" id="nav">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/create-post">Create Post</Link></li>
//         </ul>
//       </div>
//     );
//   }
  
//   export default Navbar;

import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul type="none" id="nav">
        <li>
          <Route>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
          </Route>
        </li>
        <li>
          <NavLink to="/create-post" activeClassName="active-link">
            Create Post
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;



  