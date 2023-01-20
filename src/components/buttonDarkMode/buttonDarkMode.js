import { useEffect, useRef } from 'react'
import './style.css'
import sun from './sun.svg'
import moon from './moon.svg'
import {useLocalStorage} from './../../utils/useLocalStorage'

const ButtonDarkMode = () => {

    const[DarkMode, SetDarkMode] = useLocalStorage('DarkMode', 'dark')

    const BtnRef = useRef(null)

    useEffect(() => {
        if(DarkMode === 'light') {
            document.body.classList.add('dark')
            BtnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            BtnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [DarkMode])
    const toggleDarkMode = () => {
        SetDarkMode((currentValue) => {
            return currentValue === 'dark' ? 'light' : 'dark'
        })
    }

    return ( 
        <button ref={BtnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
     );
}
 
export default ButtonDarkMode;