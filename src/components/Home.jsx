import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h3>Im Root/Home</h3>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;