import { useParams } from 'react-router-dom';

import { projects } from '../helpers/ProjectsList';

import BtnGitHub from '../components/buttonGitHub/BtnGitHub';



const Project = () => {
    const {id} = useParams()
    const project = projects[id]

    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.tittle}</h1>
                

                <img src={project.img} alt={project.tittle} className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>

                <BtnGitHub link={project.deploy}/>

            </div>
        </div>
    </main>
     );
}
 
export default Project;