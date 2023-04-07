import React from 'react';
import Cousins from './Cousins';

const Aunty = ({ring}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousins>Riad</Cousins>
                <Cousins hasFriend={true} ring={ring}>Tnia</Cousins>
            </section>
        </div>
    );
};

export default Aunty;