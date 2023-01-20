import Header from './../components/Header/Header'

const Home = () => {
    return ( 
        <>
        <Header />

            <main className="section">
                <div className="container">

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, TypeScript, ReactJS, Git, GitHub, HTML, CSS, NPM, Webpack, Figma, Eslint, Prettier, BootStrap, Lass/Sess,  StyledComponents</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Backend</h2>
                                <p>NodeJS</p>
                            </li>
                        </ul>

                </div>
            </main>
        </>
     );
}
 
export default Home;