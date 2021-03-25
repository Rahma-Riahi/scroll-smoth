import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggel = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
         <SideBar isOpen={isOpen} toggel={toggel} />   
         <NavBar toggel={toggel} />
         <HeroSection/>
        </>
    );
}

export default Home
