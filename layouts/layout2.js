import React from 'react'
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import SpaceEmpty from '../components/SpaceEmpty';

const Layout2 = (props) => {
    const {children} = props;
    return (
        <>
        <Navbar2/>
        <SpaceEmpty/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default Layout2