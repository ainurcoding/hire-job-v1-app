import React from 'react'
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

const Layout2 = (props) => {
    const {children} = props;
    return (
        <>
        <Navbar2/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default Layout2