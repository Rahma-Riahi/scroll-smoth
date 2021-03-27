import rain from '../../images/svg-1.svg'
import piggy from '../../images/svg-2.svg'
import svg3 from '../../images/svg-3.svg'
export const homeObjOne = {
  id :'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine:'Premium Bank',
  headLine: 'Unlimited Transaction with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees' ,
  buttonLabel: 'Get Started',
  imgstart: false,
  img:rain,
  alt: 'make-it-rain',
  dark: true,
  primary: true,
  darkText: false

};
export const homeObjTwo = {
    id :'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine:'Unlimited Access',
    headLine: 'Login to your account at any time',
    description: 'We have you covered no matter where your are located. All you need is an internet connection qnd a phone or computer.' ,
    buttonLabel: 'Learn More',
    imgStart: true,
    img:piggy,
    alt: 'piggyMony',
    dark: false,
    primary: false,
    darkText: true
  
  };
  export const homeObjThree = {
    id :'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine:'Join our Team',
    headLine: 'Creating an account is extremely easy',
    description:  "Get everything set up and ready under 10 minutes. All you need to so is add your information  and you're ready to go." ,
    buttonLabel: 'Start Now',
    imgstart:true,
    img:svg3,
    alt: 'make-it-rain',
    dark: false,
    primary: false,
    darkText: true
  
  };