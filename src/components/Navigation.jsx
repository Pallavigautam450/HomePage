import navlogo from '../../public/brand_logo@2x.png'

function Navigation() {
    return(
        <>
        <nav >
          <div className='logo'>
            <img src={navlogo} className= "logo-img" alt='no font'></img>
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>

          </ul>

          <button>Login</button>
        </nav>
        </>
    )
}

export default Navigation;