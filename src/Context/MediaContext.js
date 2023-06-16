import { createContext , useState, useEffect} from 'react';
import axios from 'axios';


export let MediaContext = createContext('');

function MediaContextProvider(props) {


    const [trendingMovies, settrendingMovies] = useState([]);
    const [trendingTv, settrendingTv] = useState([]);
    const [trendingPerson, settrendingPerson] = useState([]);

    
    async function getTrending(mediaType, callback){
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=142f5473345a975e890d91cea34be5fd`);
        
        // settrendingMovies(data.results);
        
        callback(data.results);
        console.log(data.results);
    } 

    useEffect(() => {
        //callback=> containe settrendingMovies or settrendingTv or settrendingPerson
        getTrending('movie', settrendingMovies);
        getTrending('tv', settrendingTv);
        getTrending('person', settrendingPerson);
    }, []);





    return <MediaContext.Provider value={{trendingMovies, trendingTv, trendingPerson}}>
        {props.children}
    </MediaContext.Provider>
}
export default MediaContextProvider;