import Home from './pages/Home/Home';
import './App.css';
import $ from 'jquery'
import { useEffect, useState } from 'react';

function App() {
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
  return (
  <div>
          
          <Home />
   </div>
    
  )
    // <BrowserRouter>
    //     <div style={{justifyContent: 'space-between', display: 'flex', flexDirection: 'row',zIndex: 3}}>
    //     <div style={{width: '50%', padding: 0}}>
    //     <p className='font-header' style={{color: 'white', marginLeft: '2%', fontSize: 40, position: 'relative', top: 35, marginTop: -35}}>Lexi Lakota<br></br>Photography</p>
    //     </div>
    //       <button className="lines-button lines" onClick={()=> onNavClick()}><span></span></button>
    //     </div>
    //   <div>
    //   <Navigation navOpen={navOpen} setNavOpen={setNavOpen} onNavClick={onNavClick}/>
    //   </div>
    //   <Routes>
    //     <Route path="*" element={<Home onBodyClick={onBodyClick} />} />
    //     <Route path="meetlexi" element={<MeetLexi />} />
    //     <Route path="info" element={<Info />} />
    //     <Route path="portfolio" element={<Portfolio />} />
    //     <Route path="contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
  //);
}

export default App;
