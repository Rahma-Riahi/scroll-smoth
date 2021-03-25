import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, HerroBtnWrapper, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4';
import {Button} from '../Button/ButtonElement';
function HeroSection() {
    const [hover, setHover]= useState( false);

    const OnHover = ()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                  <VideoBg autoPlay loop muted src={Video} 
                     type='video/mp4' />
            </HeroBg>
            <HeroContent>
              <HeroH1> Virtual Banking Made Easy</HeroH1>
              <HeroP>
                Sign up for a new accoun today and recive $250
                in credit towards your next account    
              </HeroP>
              <HerroBtnWrapper>
                  <Button to='signup' onMouseEnter={OnHover} onMouseLeave={OnHover}
                   primary='true'
                   dark ='true'
                  >
                    Get Started  {hover? <ArrowForward/>: <ArrowRight/>}
                  </Button>
              </HerroBtnWrapper> 
            </HeroContent>
        </HeroContainer >
    )
}

export default HeroSection
