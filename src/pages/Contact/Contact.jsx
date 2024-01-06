import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect } from 'react';

function Contact() {
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
    return (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <h1 className='font-header' style={{fontSize: 60, margin: '0px auto'}}>Contact me on any of my socials</h1>
            <a href='https://www.instagram.com' target='_blank' style={{display: 'flex', flexDirection: 'row', margin: '0px auto', color: 'black'}}>
                <FontAwesomeIcon icon={faInstagram} size='2x' style={{marginRight: 5}}/>
                <p style={{margin: 'auto' }}>@LexiLakotaPhotography</p> 
            </a>
            <div style={{display: 'flex', flexDirection: 'row', margin: '0px auto'}}>
                <FontAwesomeIcon icon={faFacebook} size='2x' style={{marginRight: 5}}/>
                <p style={{ margin: 'auto' }}>@LexiLakotaPhotography</p> 
            </div>
            <div style={{display: 'flex', flexDirection: 'row', margin: '0px auto'}}>
            <FontAwesomeIcon icon={faEnvelope} size='2x' style={{marginRight: 5}}/>
            <p style={{ margin: 'auto' }}>@LexiLakotaPhotography</p> 
            </div>
        </div>
    );
  }


  export default Contact;