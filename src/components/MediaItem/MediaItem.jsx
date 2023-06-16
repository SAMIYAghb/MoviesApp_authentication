import React from 'react'
import { Link } from 'react-router-dom';

export default function MediaItem({item}) {
    return<>
        <div className="col-md-2">
            <Link to={`/itemdetails/${item.id}/${item.media_type}`}>
                <div className="movie position-relative">
                    {item.poster_path?
                    <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} className="w-100" alt="" />
                    :
                    <img src={'https://image.tmdb.org/t/p/w500' + item.profile_path} className="w-100" alt="" />
                    }
                    <h3 className='h6 mt-2 mb-4 text-center'>{item.title}{item.name}</h3>
                    {item.vote_average? 
                    <div className="vote p-2 text-white position-absolute top-0 end-0">{item.vote_average?.toFixed(1)}</div>
                    :''}
                </div>
            </Link>
        </div>
    </>
}
