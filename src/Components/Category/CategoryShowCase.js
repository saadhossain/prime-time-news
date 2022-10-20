import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShowCase = ({news}) => {
    const {_id, title, image_url, details, category_id, total_view} = news;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-left'>{details.length>200 ? details.slice(0, 200) + '...': details}</p>
                    <div className="card-actions justify-between">
                        <button className="badge badge-outline"><Link to={`/category/${category_id}`}>All in this Category</Link></button>
                        <button className="badge badge-outline"><Link to={`/news/${_id}`}>Read Details</Link></button>
                        <div className="badge badge-outline">{total_view}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryShowCase;