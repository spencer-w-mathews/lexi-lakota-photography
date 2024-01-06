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

function Home() {
const myRef = useRef(null)
const bioRef = useRef(null)
const portfolioRef = useRef(null)
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const handleResize = () => {
    window.innerWidth > 600 ? setIsMobile(false) : setIsMobile(true)
   }
   
   window.addEventListener('resize', handleResize);
   
   return () => {
    window.removeEventListener('resize', handleResize);
   };
}, [])

const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }) 
const executeScrollToBio = () => bioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
const executeScrollToPortfolio = () => portfolioRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })   

    return (
      <>
      <Column className="bg">
        
        <div style={{ textAlign: 'center', width: '100vw', height: '100vh'}}>
            <p style={{color: 'white', fontSize:isMobile ? 25 : 45, marginTop: '35vh'}}>WELCOME TO</p>
            <p style={{color: 'white', fontSize:isMobile ? 45 : 85, marginTop: '-1%'}}>Lexi Lakota Photography</p>
        </div>
        <ResponsiveContainer >
          <Row>
            <Button onClick={executeScrollToBio} style={{fontSize: 20, fontWeight: 'bold', backgroundColor: 'rgba(0,0,0, 0.2)', color: 'white'}}>
              Meet
            </Button>
          </Row>
          <Row>
            <Button onClick={executeScroll} style={{fontSize: 20, fontWeight: 'bold', backgroundColor: 'rgba(0,0,0, 0.2)', color: 'white'}}>
            
              Contact
            </Button>
          </Row>
          <Row>
          <Button onClick={executeScrollToPortfolio} style={{fontSize: 20, fontWeight: 'bold' , backgroundColor: 'rgba(0,0,0, 0.2)', color: 'white'}}>Portfolio</Button>
          </Row>
        </ResponsiveContainer> 
      </Column>
      <div ref={bioRef} style={{height: 'fit-content', marginTop: 8.65}}>
              <MeetLexi homePage={true}/>
      </div>
      <div ref={myRef}>
              <Contact />
      </div>
      <div ref={portfolioRef} style={{margin: isMobile ? 5 : 70 }}>
              <Portfolio />
      </div>
      <div style={{height: '30vh'}}>
      </div>
      </>
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