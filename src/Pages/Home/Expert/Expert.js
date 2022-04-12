import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.jpg';
const expert = [
    {id: 1, name: 'will smith', img: expert1 },
    {id: 2, name: 'Dwayne Rock', img: expert2 },
    {id: 3, name: 'Messy vai', img: expert3 },
    {id: 4, name: 'Ronaldo bro', img: expert4 },
    {id: 5, name: 'Stachy jhonson', img: expert5 },
    {id: 6, name: 'limko tera', img: expert6 },
]
const Expert = () => {
    return (
        <div>
            <h2>Our Expert</h2>
        </div>
    );
};

export default Expert;