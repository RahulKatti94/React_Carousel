import { Image } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Practice() {
    return (
        <div className="container-fluid p-4">

            <div className="row">
                <div className="col-4">
                    <a href=" ">
                    <Image src="/images/swirl-150x50.png" alt='value' /></a>
                </div>
                
                <div className="col-8">
                
                    <Navbar className="justify-content-center">
                            <Nav >
                                <Navbar.Brand   as={Link} to="/">Navbar</Navbar.Brand>
                                <Nav.Link   as={Link} to="/hhome">Hhome</Nav.Link>
                                <Nav.Link as={Link} to="/features" >Features</Nav.Link>
                                <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                            </Nav>
                        
                            </Navbar>
                </div>
                

            </div>
        </div>
    )
}