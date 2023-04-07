import React from 'react';
import Cousins from './Cousins';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <p><small></small></p>
            <section className='flex'>
                <Cousins>Nabil</Cousins>
                <Cousins>Sonia</Cousins>
            </section>
        </div>
    );
};

export default Uncle;