import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    //const{service} = props;
    const { name, img, price, description, id } = service;
    return (
        <div >
            <div className='service pb-3'>
                <img src={img} alt="" />
                <h3>Name:{name}</h3>
                <h1>Price:{price}</h1>
                <p className='p-3'>{description}</p>
                <Link to={`/booking/${id}`}>
                    <button className="btn btn-warning">Book {name.toLowerCase()}</button>
                </Link>
            </div>
        </div >
    );
};

export default Service;