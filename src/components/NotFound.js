import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

const NotFound = ({location}) => (
    <div>
        <h2>Page Not Found: {location.pathname} </h2>
    </div>
)


export default NotFound;
