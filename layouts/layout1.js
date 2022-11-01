import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SpaceEmpty from '../components/SpaceEmpty';

const Layout1 = (props) => {
    const {children} = props;
    return (
        <>
        <Navbar/>
        <SpaceEmpty/>
        <SpaceEmpty/>
        <main>
            {children}
        </main>
        <SpaceEmpty/>
        <Footer/>
        </>
    )
}

export default Layout1