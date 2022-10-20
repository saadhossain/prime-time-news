import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import HomeNews from './HomeNews';
const Home = () => {
    const allNews = useLoaderData([])
    return (
        <div>
            <div className='home-banner'>
                {/* Home Banner Section */}
                <div className='w-11/12 md:w-3/5 mx-auto text-left'>
                    <h1 className='text-2xl md:text-6xl font-bold py-5 md:py-20'>Italian mayor flies his student daughters out of England</h1>
                    <p className='md:text-xl'>
                        There are more than 1.4 million confirmed cases of coronavirus in 184 countries and at least 85,000 people have died. More than half of all the confirmed cases have been in Europe, with Spain and Italy worst affected. However, the United States now has more than twice as many confirmed cases as any other single...
                    </p>
                </div>
            </div>
            {/* All News Section  */}
            <div className='w-10/12 mx-auto my-10 grid md:grid-cols-2 gap-5'>
                {
                    allNews.map(news => <HomeNews key={news._id} news={news}></HomeNews>)
                }
            </div>
        </div>
    );
};

export default Home;