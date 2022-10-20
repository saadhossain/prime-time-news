import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='bg-[#D3CCC4] py-2 text-white'>
            <div className='w-10/12 mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-bold'><Link to='/'>Prime Time</Link></h1>
                <div>
                    <ul className='md:flex gap-3 hidden'>
                        {
                            category.map(category => <li key={category.id}>
                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;