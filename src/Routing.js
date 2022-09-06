import { Link,Route,Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';   
export default function Routing() {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/about" >About</Link>
    <Link to="/contact" >Contact US</Link>
     <Routes>
        <Route path="/" extact={true} element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        {/* <Route path="*" element={<About/>}></Route> */}
     </Routes>
                         
    </div>
  )
}