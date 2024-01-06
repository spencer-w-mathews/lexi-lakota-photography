import styled from 'styled-components';
import lexi from '../../images/Lexi.jpg';
import './meetLexi.css'
import { useRef, useState, useEffect } from 'react';

function MeetLexi({homePage = false}) {
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
    return(
        <Container>
            <ResponsiveContainer>
                <Column>
                    <h1 className='font-header' style={{fontSize: 60}}>Kansas City</h1>
                    <h1 className='font-header' style={{fontSize: 40}}>Lifestyle - Maternity - Couples</h1>
                    <h1 className='font-header' style={{fontSize: 60}}>Photographer</h1>
                </Column>
                <Column>
                    <p style={{ fontSize: 25, textAlign: 'center'}}>is where a bio goes this is where a bio goes this is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goes</p>
                </Column>
            </ResponsiveContainer>
            {/* <h1 className='font-link' style={{margin: ' 0 auto', fontSize: 40, textAlign: 'center'}}>"Some beautiful Photography Quote"</h1> */}
            {/* <img src={lexi} alt='lexi' style={{marginLeft: '10px', marginRight: 'auto',height: 'auto', width: 300, boxShadow: '12px 12px 2px 1px rgba(0, 0, 0, .2)'}}/>
            <img src={lexi} alt='lexi' style={{marginLeft: 'auto', marginRight: '10px',height: 'auto', width: 300, boxShadow: '12px 12px 2px 1px rgba(0, 0, 0, .2)'}}/> */}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FDFEFF;
    padding: 10px 100px;
    @media only screen and (max-width: 1200px){
        padding: 0px;
    }
`;

const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 1200px) {
      flex-direction: column;
      margin: 0 auto;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    @media only screen and (max-width: 1200px) {
        width: 90vw;
    }
`;

const imgContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    @media only screen and (max-width: 1200px) {
        width: 90vw;
    }
`

  export default MeetLexi;