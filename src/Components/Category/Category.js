import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryShowCase from './CategoryShowCase';

const Category = () => {
    const categoryNews = useLoaderData([])
    return (
        <div>
            {/* All News Section  */}
            {
                categoryNews.length ? <div className='w-10/12 mx-auto my-10 grid md:grid-cols-2 gap-5'>
                {
                    categoryNews.map(news => <CategoryShowCase key={news._id} news={news}></CategoryShowCase>)
                }
            </div> :<h1 className='text-8xl font-bold mt-20'>No News Found<br/><small>Try New Search...</small></h1>
            }
        </div>
    );
};

export default Category;