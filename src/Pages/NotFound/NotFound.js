import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../../images/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img src={Notfound} alt="" />
            <br />
            <Link to='/'>
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;