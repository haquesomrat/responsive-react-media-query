import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-sm-6 col-12 ">
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <p className="text-danger">Expert in:{expertize}</p>
        </div>
    );
};

export default Expert;