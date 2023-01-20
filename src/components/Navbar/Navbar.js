import { NavLink } from 'react-router-dom'
import './style.css'
import ButtonDarkMode from '../buttonDarkMode/buttonDarkMode'

const Navbar = () => {

    const ActiveLink = 'nav-list__link nav-list__link--active'
    const NormalLink = 'nav-list__link'

    return ( 
        <nav className="nav">
          <div className="container">
              <div className="nav-row">
                <NavLink to='/' className="logo">
                <strong>Frontend developer</strong> portfolio
                </NavLink>
                  
                  <ButtonDarkMode />

                  <ul className="nav-list">
                    
                      <li className="nav-list__item"><NavLink to='/' className={({isActive}) => isActive ? ActiveLink : NormalLink }>Home</NavLink></li>
                      <li className="nav-list__item"><NavLink to='/Projects' className={({isActive}) => isActive ? ActiveLink : NormalLink }>Projects</NavLink></li>
                      <li className="nav-list__item"><NavLink to='/Contacts' className={({isActive}) => isActive ? ActiveLink : NormalLink }>Contacts</NavLink></li>
                  </ul>
              </div>
          </div>
        </nav>
     );
}
 
export default Navbar;