import styled from 'styled-components';

function Nav({navOpen, onNavClick, executeScrollToBio, executeScrollToPortfolio, executeScroll }) {

    return(
        navOpen ? 
        <Container>
            <Column>
            <div style={{display: 'flex', backgroundColor: '#1a1918', width: '99.1vw', height: 50, justifyContent: 'right', flexDirection: 'column'}}>
          <p className='font-main' style={{color: 'white', fontSize: 15,  margin: '15px auto auto 20px' }}>Lexi Lakota Photography</p>
            <p className='font-main' onClick={executeScrollToBio} style={{ margin: '40px 20px auto 20px',fontSize: 20, cursor: 'pointer', color: 'white', verticalAlign: 'center'}}>
              About
            </p>
            <p className='font-main' onClick={executeScrollToPortfolio} style={{ margin: '20px 20px auto 20px',fontSize: 20, cursor: 'pointer', color: 'white', verticalAlign: 'center'}}>
              Portfolio
            </p>
            <p className='font-main' onClick={executeScroll} style={{ margin: '20px 40px auto 20px',fontSize: 20, cursor: 'pointer', color: 'white', verticalAlign: 'center'}}>
              Contact
            </p>
        </div>
            </Column>
        </Container>
        : <></>
    )
}

const Container = styled.div`
    position: absolute;
    left: 60%;
    top: 0px;
    z-index: 5;
    background-color: #1a1918;
    width: 40vw;
    height: 100vh;
    @media only screen and (max-width: 800px) {
        left: 0px;
          width: 100vw;
      }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;

`;
const NavLinkButton = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    cursor: pointer;
`

const NavLink = styled.p`
    font-family: Raleway-bold;
    font-size: 25px;
`

export default Nav;