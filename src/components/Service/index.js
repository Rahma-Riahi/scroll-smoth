import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, Serviceswrapper } from './ServicesElement'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from "../../images/svg-3.svg"
function Services() {
    return (
        <ServicesContainer id='services'>
           <ServicesH1>Our Services </ServicesH1>
           <Serviceswrapper>
             <ServicesCard>
               <ServicesIcon src={Icon1} /> 
               <ServicesH2>Reduce expences</ServicesH2>
               <ServicesP>
                   We help reduce your fees qnd increase your overall revenu
               </ServicesP>
             </ServicesCard> 
             <ServicesCard>
               <ServicesIcon src={Icon2} /> 
               <ServicesH2>Virtual Offices</ServicesH2>
               <ServicesP>
                   You can access our platform online anywhere in the word
               </ServicesP>
             </ServicesCard> 
             <ServicesCard>
               <ServicesIcon src={Icon3} /> 
               <ServicesH2>Premium Benefits</ServicesH2>
               <ServicesP>
                   We help reduce your fees qnd increase your overall revenu
               </ServicesP>
             </ServicesCard>
                
           </Serviceswrapper> 
        </ServicesContainer>
    )
}

export default Services
