import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tostifyy = () => {

    const Ttoast = () => {

        toast("Default Toster", {
            position: "bottom-left"
        });
    }

    const Ttoast1 = () => {

        toast.error("Error Toster", {
            position: "bottom-center"
        });
    }

    const Ttoast2 = () => {

        toast.warn("Warning Toster", {
            position: "top-right"
        });
    }

    const Ttoast3 = () => {

        toast.success("Success Toster", {
            position: "top-center"
        });
    }

    const Ttoast4 = () => {

        toast.info("Information Toster", {
            position: "top-left"
        });
    }


    return (
        <div>
            <h1>Tostify Package</h1> <br />

            <h3>Default Tostify</h3>
            <button className='btn btn-secondary' onClick={Ttoast}>Default</button><br /><br />

            <h3>Error Tostify</h3>
            <button className='btn btn-danger' onClick={Ttoast1}>Error</button><br /><br />

            <h3>Warning Tostify</h3>
            <button className='btn btn-warning' onClick={Ttoast2}>Warning</button><br /><br />

            <h3>Success Tostify</h3>
            <button className='btn btn-primary' onClick={Ttoast3}>Success</button><br /><br />

            <h3>Information Tostify</h3>
            <button className='btn btn-info' onClick={Ttoast4}>Information</button><br /><br />


            <ToastContainer />
        </div>
    )
}

export default Tostifyy