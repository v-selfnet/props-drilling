import React from 'react';
import Friend from './Friend';

const Cousins = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousins;