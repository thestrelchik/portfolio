import './style.css'

import imgGit from './gitHub-black.svg'

const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} className="btn-outline" target='_blank' rel='noreferrer'>
                    <img src={imgGit} alt="" />
                    Deploy
                </a>
     );
}
 
export default BtnGitHub;