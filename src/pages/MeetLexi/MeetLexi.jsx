import styled from 'styled-components';
import lexi from '../../images/Lex.jpg';
import './meetLexi.css'
import { useRef, useState, useEffect } from 'react';

function MeetLexi({homePage = false}) {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
          window.innerWidth > 800 ? setIsMobile(false) : setIsMobile(true)
         }
         
         window.addEventListener('resize', handleResize);
         window.innerWidth > 800 ? setIsMobile(false) : setIsMobile(true)
         return () => {
          window.removeEventListener('resize', handleResize);
         };
      }, [])
    return(
        <Container style={{ border: '5px solid black', outline: '1px solid black', outlineOffset: -20}}>
            <ResponsiveContainer >
                <Column style={{display: 'flex', margin: 'auto auto auto 0px', textShadow: '-5px 5px #8da89d', textAlign: isMobile ? 'center' : 'center'}}>
                    <h1 className='font-header' style={{fontSize:isMobile ? 40 : 60, marginTop: 20}}>Kansas City</h1>
                    <h1 className='font-header' style={{fontSize:isMobile ? 30 : 40, marginTop: isMobile ? '' : -9}}>Lifestyle - Maternity - Couples</h1>
                    <h1 className='font-header' style={{fontSize:isMobile ? 40 : 60, marginTop: isMobile ? '' : 0}}>Photographer</h1>
                </Column>
                <Column style={isMobile ? {marginBottom: 40}: {marginBottom: 40, marginTop: 35}}>
                    <img src={lexi} style={isMobile ? {display: 'flex', marginLeft: 'auto',marginTop: 20, width: '250px', borderRadius: '200px', marginRight: 'auto', border: '15px solid #c49e14', outline: '1px solid black', outlineOffset: 10}:{display: 'flex', marginLeft: 'auto', width: '500px', borderRadius: '200px', marginRight: 'auto', border: '15px solid #c49e14', outline: '1px solid black', outlineOffset: 10}}/>
                </Column>
                <Column style={{display: 'flex', margin: 'auto 0px auto auto', textShadow: '-5px 5px #8da89d', textAlign: isMobile ? 'center' : 'center', marginLeft:isMobile ? 'auto': 30}}>
                    <h1 className='font-header' style={{fontSize: isMobile ? 30 : 45}}>"Photography takes an instant out of time, altering time by holding it still."</h1>
                     <h1 className='font-header' style={{fontSize: 20, marginTop: isMobile ? 0 : -9, marginBottom: 20}}>-Dorthia Lange</h1>
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