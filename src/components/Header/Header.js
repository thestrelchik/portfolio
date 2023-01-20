import './style.css'

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <br/><em>Andrei Strelchik</em></strong><br />
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="https://drive.google.com/file/d/1VufffRNpXgqLnFhBgdIPGwA0PuFy2nUC/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">Download CV</a>
            </div>
        </header>
     );
}
 
export default Header;