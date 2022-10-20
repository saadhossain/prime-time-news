import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success('Registration Successfull...', {autoClose:500})
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='bg-emerald-400 py-2 px-3 rounded'>Google Login</button>
        </div>
    );
};

export default Register;