import { Carousel } from 'bootstrap'
import { Card, Container } from 'react-bootstrap'
import girl from '../src/videos/girl.mp4'
import './carousel.css'

const Newfile = () => {
  return (
    <div> <h1 className='ello'>Some Text</h1>
    <Container>
        <Card>
            <Card.Body>
                 <video src={girl}></video>
            </Card.Body>    
        </Card>
    </Container> 
       
    </div>
  )
}
    
export default Newfile