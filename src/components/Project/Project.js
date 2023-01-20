import { NavLink } from 'react-router-dom';
import './style.css'


const Project = ({tittle, img, index}) => {
    return ( 
        <NavLink to={`/project/`+index}>
            <li className="project">
                        <img src={img} alt={tittle} className="project__img" />
                        <h3 className="project__title">{tittle}</h3>
            </li>
        </NavLink>        
     );
}
 
export default Project;