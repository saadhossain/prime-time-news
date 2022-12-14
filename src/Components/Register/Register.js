import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { googleSignIn, userRegister, verifyEmail } = useContext(AuthContext);
    //Handle google login
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Registration Successfull...', { autoClose: 500 })
            })
            .catch(error => console.error(error))
    }
    //Handle Email Password Register
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const fname = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fname, email, password);
        userRegister(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                verifyEmail()
                    .then(() => { })
                toast.success('Registration Success...Please Verify your Email', { autoClose: 500 })
                form.reset()
            })
            .catch(error => console.error(error))
    }
    //Handle accept terms and condition checkbox
    const [isDisabled, setIsDisabled] = useState(true)
    return (
        <div className='flex justify-center my-5'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="mb-3 text-3xl font-semibold text-center">Register An Account</h2>
                <p className="text-sm text-center dark:text-gray-400">Already have an account?
                    <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline">Login Here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                </div>
                <form onSubmit={handleRegister} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="block text-sm text-left">Full Name</label>
                            <input type="text" name="fullName" id="fullName" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm text-left">Email address</label>
                            <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" to='/' className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                        </div>
                        <div className='space-y-2'>
                            <div className="flex items-center">
                                <input onClick={()=> setIsDisabled(!isDisabled)} type="checkbox" name="remember" id="remember" aria-label="Accept Terms and Condition" className="mr-1 rounded-sm focus:prime focus:dark:prime focus:ring-2 accent-prime" />
                                <label for="remember" className="text-sm dark:text-gray-400">Accept Terms and Condition</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-prime text-white" disabled={isDisabled}>Register</button>
                </form>
            </div>

        </div>
    );
};

export default Register;