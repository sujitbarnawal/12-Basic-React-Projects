import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Car-Era</div>
      <ul className="list">
        <li>Home</li>
        <li>Explore</li>
        <li>About Us</li>
        <li className='contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
