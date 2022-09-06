import { Image } from "react-bootstrap"

export default function Features() {
  return (
    <div className='container-fluid'>
            <div className='row footer pt-4'>
                <div className='col-3'>
                    
                    <Image src="/images/swirl-150x50.png" alt='value'></Image>
                </div>

                <div className='col-3'>
                    <h3>About</h3>
                    <ul className='list-unstyled order'>
                        <li><a href=' '>About Us</a></li>
                        <li><a href=' '>Customers</a></li>
                        <li><a href=' '>Blog</a></li>
                        <li><a href=' '>How It Works</a></li>
                        <li><a href=' '>Contact Us</a></li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h3>Products</h3>
                    <ul className='list-unstyled order'>
                        <li><a href=' '>One to Many Live Video Shopping</a></li>
                        <li><a href=' '>One to One Virtual Shopping</a></li>
                        <li><a href=' '>Short Video Stories</a></li>
                        <li><a href=' '>Virtual Clienteling</a></li>
                        <li><a href=' '>Swirl for Shopify</a></li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h3>Policy</h3>
                    <ul className='list-unstyled order'>
                        <li><a href=' '>Terms and Conditions</a></li>
                        <li><a href=' '>Privacy Policy</a></li>

                        <b className='font'><li>Follow Us</li></b>
                        <a href=" "><li>ICONS</li></a>
                    </ul>
                </div>
            </div>
    </div>
  )
}