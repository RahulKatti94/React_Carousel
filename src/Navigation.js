// import { Button} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
// import {Link,Route , Routes} from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
// import Home from './Home';
export default function Navigation() {
  return (
    <div>
<Navbar className= 'alert alert-primary'bg="dark" variant="dark">
<br />
<Container>
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
</Container>
</Navbar>
<Button variant= "primary">Click me</Button>

<Button variant="primary">Primary</Button>{' '}
<Button variant="secondary">Secondary</Button>{' '} 
<Button variant="success">Success</Button>{' '}
<Button variant="warning">Warning</Button>{' '}
<Button variant="danger">Danger</Button>{' '}
<Button variant="info">Info</Button>{' '}
<Button variant="light">Light</Button>{' '}
<Button variant="dark">Dark</Button> <Button variant="link">Link</Button>

{/* <Link to="/about" className="nav-link active">About</Link> */}
<h1 className="alert-primary">Primary</h1>
<h1 className="alert-light">Light</h1>
{/* <Link to="/" className="nav-link active">Home</Link>
                        
                
                        <Link to="/about" className="nav-link active">About</Link>
                    
                        <Link to="/contact_us" className="nav-link active">Contact US</Link>
                          <Routes>
                                 <Route path="/about" element={<Home/>}></Route>
                        </Routes>  

             
                <Link className="nav-link active">Contact US</Link> */}
</div>
  )
}