import React, { useContext } from 'react';
import MediaItem from '../MediaItem/MediaItem';
import {Helmet} from 'react-helmet';
import { MediaContext } from './../../Context/MediaContext';


export default function Home() {

  let {trendingMovies, trendingTv, trendingPerson} = useContext(MediaContext);
  
  return<>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content='Trending Movies, Tv and Persons'/>
                <title>Home Page</title>    
            </Helmet>

    <div className="row py-5 mt-5">
      <div className="col-md-4 d-flex align-items-center">
        <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h1 className="h4">Trending Movies<br/>To Watch Right Now</h1>
          <p className="text-muted py-2">Most Wotched To Watch Right Now</p>
          <div className="brdr w-100 mt-3"></div>
        </div>       
      </div>
      {trendingMovies.slice(0,10).map((item, index)=><MediaItem key={index} item={item}/>)}
    </div>

    <div className="row py-5">
      <div className="col-md-4 d-flex align-items-center">
        <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h1 className="h4">Trending Tv<br/>To Watch Right Now</h1>
          <p className="text-muted py-2">Most Wotched To Watch Right Now</p>
          <div className="brdr w-100 mt-3"></div>
        </div>       
      </div>
      {trendingTv.slice(0,10).map((item, index)=><MediaItem key={index} item={item}/>)}
    </div>

    <div className="row py-5">
      <div className="col-md-4 d-flex align-items-center">
        <div className="">
          <div className="brdr w-25 mb-3"></div>
          <h1 className="h4">Trending People<br/>To Watch Right Now</h1>
          <p className="text-muted py-2">Most Wotched To Watch Right Now</p>
          <div className="brdr w-100 mt-3"></div>
        </div>       
      </div>
      {trendingPerson.filter((person)=> person.profile_path !==null).slice(0,10).map((item, index)=><MediaItem key={index} item={item}/>)}
    </div>
  </>
}
