import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';


export default function ItemDetails() {
    // let allParams = useParams();
    let {id, media_type} = useParams();
    const [itemDetails, setitemDetails] = useState({});

    // console.log(allParams);
// 
    async function getItemDetails(id, mediaType)
    {
        let{data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=142f5473345a975e890d91cea34be5fd&language=en-US`);
        console.log(data);
        setitemDetails(data);
    }


    
    useEffect(() => {
        getItemDetails(id, media_type);
    }, []);

    return <>

            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content='Trending Movies, Tv and Persons'/>
                <title>{itemDetails.title}</title>    
            </Helmet>

    <div className="row mt-5  my-5">
        <div className="col-md-3">
        {itemDetails.poster_path?
                    <img src={'https://image.tmdb.org/t/p/w500' + itemDetails.poster_path} className="w-100" alt="" />
                    :
                    <img src={'https://image.tmdb.org/t/p/w500' + itemDetails.profile_path} className="w-100" alt="" />
                    }
            
        </div>
        <div className="col-md-9">
            <h2>{itemDetails.title}{itemDetails.name}</h2>
            <div className='py-2'>Vote Average: {itemDetails.vote_average? 
                    <span className=" p-2 text-white">{itemDetails.vote_average?.toFixed(1)}</span>
                    :''}</div>

            <div className='py-2'>Vote Count: {itemDetails.vote_count? 
                    <span className=" p-2 text-white">{itemDetails.vote_count?.toFixed(1)}</span>
                    :''}</div>

            <div className='py-2'>Popularity: {itemDetails.popularity}</div>
            {itemDetails.release_date?
            <div className='py-2'>Release date: {itemDetails.release_date}</div>
            :''}
            {itemDetails.overview?
            <p className='py-2'>{itemDetails.overview}</p>
            :''}
            
            
        </div>
    </div>
    </>
}
