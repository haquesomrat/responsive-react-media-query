import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jfif';
import mechanic2 from '../../../images/mechanic/mechanic-2.jfif';
import mechanic3 from '../../../images/mechanic/mechanic-3.jfif';
import mechanic4 from '../../../images/mechanic/mechanic-4.jfif';
import mechanic5 from '../../../images/mechanic/mechanic-5.jfif';
import mechanic6 from '../../../images/mechanic/mechanic-6.jfif';
import Expert from '../Expert/Expert';


const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        img: mechanic5,
        name: 'Sakib Andrson',
        expertize: '-Alrounder Expert-'
    },
    {
        img: mechanic6,
        name: 'Sakib Andersona',
        expertize: '-Alrounder Expert-'
    },
]

const Experts = () => {
    return (
        <div className='container' id="experts">
            <h1 className="text-primary mt-5">Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;