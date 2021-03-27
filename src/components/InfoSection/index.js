import React from 'react'
import {Button} from '../Button/ButtonElement';
import { Column1, Column2, Heading, ImgWrap,BtnWrapper, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrrapper, TopLine , Img} from './InfoElement';

function InfoSection({lightBg, id, topLine, darkText, headLine,description,
buttonLabel, img,alt, imgStart, primary, dark, dark2, lightText }) {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id} >
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                    <Column1>
                      <TextWrrapper>
                          <TopLine >{topLine}</TopLine>
                          <Heading lightText={lightText} >{headLine} </Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          <BtnWrapper>
                              <Button to='home'
                                      smooth={true}
                                      duration={500} spy={true}
                                      exact='true' offset={-80}
                                      primary={primary ?1:0}
                                      dark={dark?1:0}
                                      dark2={dark2?1:0}
                          >{buttonLabel} </Button>
                          </BtnWrapper>
                      </TextWrrapper>
                      
                    </Column1>
                    <Column2>
                      <ImgWrap>
                        <Img src={img} alt={alt} />
                      </ImgWrap>
                    </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>   
        </>
    )
}

export default InfoSection
