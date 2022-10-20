import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                <h1 className='text-2xl font-bold'><Link to='/'>Prime Time</Link></h1>
                <>
                    <ul className='md:flex gap-3 items-center hidden font-semibold'>
                        {
                            category.map(category => <li key={category.id}>
                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </li>)
                        }
                        {
                            user?.uid ? <><img src={user?.photoURL} alt="" className='w-10 rounded-3xl' />
                                <button onClick={handleSignOut}>Logout</button></> : <Link to='/login'>Login</Link>
                        }
                    </ul>

                </>
            </div>
        </div>
    );
};

export default Header;