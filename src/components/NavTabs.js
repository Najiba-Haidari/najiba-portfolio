import React from 'react';
import '../../src/styles/NavTabs.css'

const myStyles = {
  navImage: {
    // backgroundImage: "url('/images/background.png')",
    backgroundColor: "#00539C",
    backgroundSize: "cover",
    height: "180px",
  },
  link:{
    color: "white",
    fontSize: "20px",
  }
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
    <ul className="nav nav-tabs d-flex bd-highlight mb-3 w-100 " style={myStyles.navImage}>
    {/* <li className='myName me-auto p-2 bd-highlight'>Najiba Haidari<span>(She/Her)</span></li> */}
    <li className="nav-item me-auto p-2 bd-highlight fs-1 w-30 my-auto " style={myStyles.link}>
        {/* <a style={myStyles.link}
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        > */}
          Najiba Haidari <span className='fs-5'>(She/Her)</span>
        {/* </a> */}
      </li>
      <li className="nav-item p-2 bd-highlight my-auto navLink" >
        <a 
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link ' : 'nav-link'} style={myStyles.link}
        >
          About Me
        </a>
      </li>
      <li className="nav-item p-2 bd-highlight my-auto navLink" >
        <a 
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Porfolio' ? 'nav-link  ' : 'nav-link'} style={myStyles.link}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item p-2 bd-highlight my-auto navLink" >
        <a 
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link' : 'nav-link'} style={myStyles.link}
        >
          Contact
        </a>
      </li>
     
      <li className="nav-item p-2 bd-highlight my-auto navLink" >
        <a 
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link ' : 'nav-link'} style={myStyles.link}
        >
          Resume
        </a>
      </li>
    
    </ul>
    </>
  );
}

export default NavTabs;
