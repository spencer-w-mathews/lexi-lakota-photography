import styled from 'styled-components';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MeetLexi from '../MeetLexi/MeetLexi' 
import { useRef, useState, useEffect } from 'react';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import { faHouse, faGrip, faHandHoldingDollar, faCamera, faHandshakeSimple, faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../Navigation'
import '../../App.css';
import $ from 'jquery'


function Home() {
const myRef = useRef(null)
const bioRef = useRef(null)
const portfolioRef = useRef(null)
const [isMobile, setIsMobile] = useState(false)
const [navOpen, setNavOpen] = useState(false)

const onNavClick = () => {
  setNavOpen(!navOpen)
  if(navOpen){
  $('#overlay').hide();
  $('.lines-button').removeClass('close');
  }else{
    $('#overlay').show();
        $('.lines-button').addClass('close');
  }
}

const onBodyClick = () => {
  setNavOpen(false)
  if(navOpen){
  $('#overlay').hide();
  $('.lines-button').removeClass('close');
  }
}

useEffect(() => {
  const handleResize = () => {
    window.innerWidth > 800 ? setIsMobile(false) : setIsMobile(true)
   }
    window.innerWidth > 800 ? setIsMobile(false) : setIsMobile(true)
   window.addEventListener('resize', handleResize);
   
   return () => {
    window.removeEventListener('resize', handleResize);
   };
}, [])

const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
const executeScrollToBio = () => bioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
const executeScrollToPortfolio = () => portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   

    return (
      <div style={{backgroundColor: '#10593a'}}>
      <Column className="bg">
        {isMobile ?<button className="lines-button lines" onClick={()=> onNavClick()}><span></span></button>
        :
        <div style={{display: 'flex', backgroundColor: '#1a1918', width: '99.1vw', height: 50, justifyContent: 'right'}}>
          <p className='font-main' style={{color: 'white', fontSize: 20,  margin: 'auto auto auto 20px' }}>Lexi Lakota Photography</p>
            <p className='font-main' onClick={executeScrollToBio} style={{ margin: 'auto 20px auto 20px',fontSize: 20, cursor: 'pointer', color: 'white', verticalAlign: 'center'}}>
              About
            </p>
            <p className='font-main' onClick={executeScrollToPortfolio} style={{ margin: 'auto 20px auto 20px',fontSize: 20, cursor: 'pointer', color: 'white', verticalAlign: 'center'}}>
              Portfolio
            </p>
            <p className='font-main' onClick={executeScroll} style={{ margin: 'auto 40px auto 20px',fontSize: 20, cursor: 'pointer', color: 'white', verticalAlign: 'center'}}>
              Contact
            </p>
        </div>}
        <div style={{ textAlign: 'center', width: '90vw', height: '100vh', margin: 'auto', textShadow: '-5px 5px #000'}}>
            {/* <p style={{color: 'white', fontSize:isMobile ? 25 : 45, marginTop: '35vh'}}>WELCOME TO</p> */}
            <p className='font-main' style={{color: 'white', fontSize:isMobile ? 40 : 105, marginTop:isMobile ?'25vh' :'35vh'}}>Lexi Lakota Photography</p>
        </div>

      </Column>
      <div ref={bioRef} style={{height: 'fit-content'}}>
              <MeetLexi homePage={true}/>
      </div>
      <div ref={portfolioRef} style={{margin: isMobile ? 5 : 70 }}>
              <Portfolio />
      </div>
      <div ref={myRef} style={{height: 'fit-content', marginTop: 50, marginBottom: 50}}>
              <Contact />
      </div>
      <div style={{height: '30vh'}}>
      </div>
      </div>
    );
  }

const Button = styled.button`
    background-color: white;
    border-radius: 20px;
    border: 1px solid white;
    width: 150px;
    height: 40px;
    margin-top: 0%;
    cursor: pointer;
  `;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      margin-left: auto;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    @media only screen and (max-width: 600px) {
      margin-top: 10px;
    }
    `;

  export default Home;