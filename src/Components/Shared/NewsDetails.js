import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const newsDetails = useLoaderData();
    const {title, image_url, details, category_id, total_view } = newsDetails;
    console.log(newsDetails);
    return (
        <div className='w-11/12 md:w-5/12 mx-auto my-10'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-left md:text-center">{title}</h2>
                    <p className='text-left'>{details}</p>
                    <div className="card-actions justify-between">
                        <button className="badge badge-outline"><Link to={`/category/${category_id}`}>All in this Category</Link></button>
                        <div className="badge badge-outline">{total_view}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;