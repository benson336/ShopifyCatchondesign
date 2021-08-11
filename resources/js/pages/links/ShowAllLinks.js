import React from 'react';
import {TitleBar, useRoutePropagation} from '@shopify/app-bridge-react';
import {useLocation} from 'react-router-dom';


export default function ShowAllLinks(){
    let location = useLocation();
    useRoutePropagation(location);
    return(
        <div>
            <TitleBar title="Show All Links" />
            <h1>Show All Links Page</h1>
        </div>
    )
}