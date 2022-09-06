import { Nav } from "react-bootstrap"
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
export default function Layout() {
  return (
    <div>   
        <h1>Good</h1>
      <Nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contactus">About</Link>
          </li>
          <li>
            <Link to="/aboutus">Users</Link>
          </li>
        </ul>
      </Nav>

      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Home />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="aboutus" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}