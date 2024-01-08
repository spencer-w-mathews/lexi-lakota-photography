import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm'

function Contact() {
    const [isMobile, setIsMobile] = useState(false)
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
    return (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: '#FDFEFF'}}>
            <h1 className='font-header' style={{fontSize: 60, margin: '40px auto 0px'}}>Contact me on any of my socials</h1>
            <div style={{display: 'flex', flexDirection: isMobile ? 'column': 'row', marginTop: 20, marginBottom: 20}}>
                <a href='https://www.instagram.com/lexi_lakotaphotography/' target='_blank' style={{display: 'flex', flexDirection: 'row', margin: '10px auto', color: 'black', width: 280}}>
                    <div style={{display: 'flex', flexDirection: 'row', margin: '0px auto'}}>
                        <FontAwesomeIcon icon={faInstagram} size='2x' style={{marginRight: 5}}/>
                        <p style={{margin: 'auto' }}>@LexiLakotaPhotography</p> 
                    </div>
                </a>
            <a  href='https://www.facebook.com/profile.php?id=100095246892706&mibextid=LQQJ4d' target='_blank' style={{display: 'flex', flexDirection: 'row', margin: '10px auto', color: 'black' , width: 280}}>
                <div style={{display: 'flex', flexDirection: 'row', margin: '0px auto'}}>
                    <FontAwesomeIcon icon={faFacebook} size='2x' style={{marginRight: 5}}/>
                    <p style={{ margin: 'auto' }}>@LexiLakotaPhotography</p> 
                </div>
            </a>
            <a href='https://www.gmail.com' target='_blank' style={{display: 'flex', flexDirection: 'row', margin: '10px auto', color: 'black', width: 280}}>
                <div style={{display: 'flex', flexDirection: 'row', margin: '0px auto'}}>
                    <FontAwesomeIcon icon={faEnvelope} size='2x' style={{marginRight: 5}}/>
                    <p style={{ margin: 'auto' }}>LexiLakotaPhotography@gmail.com</p> 
                </div>
            </a>
            </div>
            <ContactForm />
        </div>
    );
  }


  export default Contact;