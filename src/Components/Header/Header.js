import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/prime.png';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);
    //Handle SignOut
    const handleSignOut = () => {
        logOut();
    }
    return (
        <div className='py-2 text-[#F88C00] border-b-2 border-[#F88C00]'>
            <div className='w-10/12 mx-auto flex justify-between items-center'>
                <Link to='/' className='flex items-center gap-2'>
                    <img src={logo} alt='Branding/Logo' />
                    <h1 className='text-2xl font-bold'>Prime Time</h1>
                </Link>
                <>
                    <ul className='md:flex gap-3 items-center hidden font-semibold'>
                        {
                            category.map(category => <li key={category.id}>
                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </li>)
                        }
                        {/* If there is any image of user, we will show that and logout button otherwise we will show our logo */}
                        {
                            user?.uid ? <> {user?.photoURL ? <img src={user?.photoURL} alt="" className='w-10 rounded-3xl' /> : <img src={logo} alt=''/>}
                            <button onClick={handleSignOut}>Logout</button></> : <Link to='/login'>Login</Link>
                        }
                    </ul>

                </>
            </div>
        </div>
    );
};

export default Header;