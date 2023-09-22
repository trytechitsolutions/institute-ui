import React from 'react';
import { GetStoreData } from '../ReusableComponents/ReduxActions/FecthState';

function Home(){
    console.log(GetStoreData('LoginReducer'))
    return(
        <div>
            Home...!
        </div>
    )
}
export default Home;
