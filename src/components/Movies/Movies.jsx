import React , { useContext}from 'react';
import { MediaContext } from './../../Context/MediaContext';
import MediaItem from '../MediaItem/MediaItem';

export default function Movies() {

  let {trendingMovies} = useContext(MediaContext);    
      
      return (
        <div className="row py-5 mt-5">
      <div className="col-md-4 d-flex align-items-center">
        <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h1 className="h4">Trending Movies<br/>To Watch Right Now</h1>
          <p className="text-muted py-2">Most Wotched To Watch Right Now</p>
          <div className="brdr w-100 mt-3"></div>
        </div>       
      </div>
      {trendingMovies.map((item, index)=><MediaItem key={index} item={item}/>)}
    </div>
      )
    }

  

