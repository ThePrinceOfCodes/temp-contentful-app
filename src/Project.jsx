import { useFetchProjects} from './FetchProjects';

const Project = () => {
    const {loading,projects} = useFetchProjects();

    // console.log(projects);

    if(loading){
        return <section className='projects'>
            <h1>...Loading</h1>
        </section>
    }
    return<section className='projects'>
            <div className='title'>
                <h2>projects</h2>
                <div className="title-underline"></div>
            </div>
            <div className="projects-center">
                { projects.map((project) => {
                    const {id,image,url,title} = project;
                    return <a href={url} key={id} className='project' target='_blank' rel='noreferrer'>
                        <img src={image} alt={title} className='img'  />
                        <h5>{title}</h5>
                    </a>
                })}
            </div>
        </section>
}

export default Project;