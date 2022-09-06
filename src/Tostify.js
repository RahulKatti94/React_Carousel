import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tostify = () => {

    const diffToast = () =>{

    toast.info("Information Toster", {
        position:"top-left"
    });

    toast.success("Success Toster", {
        position:"top-center"
    });

    toast.warn("Warning Toster", {
        position:"top-right"
    });
}
    

const diffToast1 = () =>{   


    toast("Default Toster", {
        position:"bottom-left"
    });
        
    toast.error("Error Toster", {
        position:"bottom-center"
    });
}

  return (
    <div>
        <h1> Tostify Package</h1>
        <button className='btn btn-primary' onClick={diffToast}>Tostify Alerts  </button> <br />
        <h2> Second Tostify Button </h2>
        <button className='btn btn-secondary' onClick={diffToast1}>Tostify Eroor</button>
        <ToastContainer />
    </div>
  )
}

export default Tostify;