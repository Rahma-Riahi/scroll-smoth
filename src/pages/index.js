import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Services from '../components/Service'

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
         
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
          <Services/>
        
        <InfoSection {...homeObjThree} />
      
        </>
    );
}

export default Home
