import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu.svg'
import contact_img from '../../assets/contact.png'
import {Link} from 'react-scroll'
import { useState } from 'react'


const Navbar = () => {

  const [showMenu,setShowMenu]=useState(false)

  return (
    <nav className='navbar'>
        <img src={logo} className='logo' alt='logo'/>
        <div className="desktop-menu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-250} duration={500} className='desktop-menu-list-item'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktop-menu-list-item'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktop-menu-list-item'>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktop-menu-list-item'>Client</Link>
        </div>
        <button className='desktop-menu-btn' onClick={()=>{
          document.getElementById("contacts").scrollIntoView({behaviour:"smooth"})
        }}>
            <img src={contact_img}  className="desktop-icon-image" />Contact Me
        </button>

        <img src={menu_icon} className='mobile-menu' alt='Menu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="nav-menu" style={{display:showMenu?"flex":"none"}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-250} duration={500} className='list-item' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='list-item' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='list-item' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='list-item' onClick={()=>setShowMenu(false)}>Client</Link>
            <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-100} duration={500} className='list-item' onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>
    </nav>
  )
}

export default Navbar
