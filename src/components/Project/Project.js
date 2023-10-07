const Project = ({  imageSrc, projectLink, altText, description }) => {
    return (
        <div className="project">
            <img src={imageSrc} alt={altText} />
            <div className="mask">
                <a href={projectLink} target="_blank"><i className="fas fa-search"></i></a>
            </div>
            <div className="project-info">
                <p>{description}</p>
            </div>
        </div>  
    )
}

export default Project;