import  {Link} from "react-router-dom";
import { FaTimes, FaBars } from 'react-icons/fa';
import {IoLogoTwitter} from 'react-icons/io';
import {BsTwitch} from 'react-icons/bs';
import { useState, useEffect } from "react";
import './Navbar.css';


export function Navbar(){

    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');
    const [hamMenu, setHamMenu] = useState(true);
    
    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section');
          const currentScrollPos = window.pageYOffset;
    
          sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight;
    
            if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
              setActiveMenuItem(section.getAttribute('id'));
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    const handleMenuItemClick = (id) => {
        setActiveMenuItem(id);
        const section = document.getElementById(id);
        const sectionTop = section.offsetTop - 50;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      };
    const handleHamMenuItemClick = (id) => {
        setActiveMenuItem(id);
        setClick(!click);
        setHamMenu(!hamMenu);
        const section = document.getElementById(id);
        const sectionTop = section.offsetTop - 50;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    };
    

    const handleClick = () =>{
        setActiveMenuItem('');
        setClick(!click);
        setHamMenu(!hamMenu);
    }
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColor(true);
        }
        else{
            setColor(false);
        }
     };
     window.addEventListener('scroll', changeNavbarColor);

    return (
        <nav className={color ? 'navbar scroll' : 'navbar'}>
            <div className="logo">
                <Link to="/" className="navbar-logo">
                   CURRENCY BALANCES 
                </Link>
            </div>
            <ul className="menu">
                <li className={activeMenuItem === 'Home' ? 'active' : ''} onClick={() => handleMenuItemClick('Home')}>Home</li>
                <li className={activeMenuItem === 'Market' ? 'active' : ''} onClick={() => handleMenuItemClick('Market')}>About</li>
                <li className={activeMenuItem === 'ChooseUs' ? 'active' : ''} onClick={() => handleMenuItemClick('ChooseUs')}>Services</li>
                <li className={activeMenuItem === 'Join' ? 'active' : ''} onClick={() => handleMenuItemClick('Join')}>Contact</li>
            </ul>
            <ul className={hamMenu? "menu-list" : "menu-list show"}>
                <li className={activeMenuItem === 'Home' ? 'active' : ''} onClick={() => handleHamMenuItemClick('Home')}>Home</li>
                <li className={activeMenuItem === 'Market' ? 'active' : ''} onClick={() => handleHamMenuItemClick('Market')}>About</li>
                <li className={activeMenuItem === 'ChooseUs' ? 'active' : ''} onClick={() => handleHamMenuItemClick('ChooseUs')}>Services</li>
                <li className={activeMenuItem === 'Join' ? 'active' : ''} onClick={() => handleHamMenuItemClick('Join')}>Contact</li>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </ul>
          
            <div className="right-menu">
                <IoLogoTwitter className="bis"/>
                <BsTwitch className="bis"/>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
            </div>
                
                
                  
               
               
        </nav>
    )
}