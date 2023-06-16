
import { createContext, useState} from 'react';

export let AuthContext = createContext (null);

export default function AuthContextProvider (props){
    const [userData, setuserData] = useState(null);

    return <AuthContext.Provider value ={{userData, setuserData}}>
        {props.children}
    </AuthContext.Provider>
}