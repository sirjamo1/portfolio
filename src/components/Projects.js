import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { projectData } from "./projectData";

const Projects = () => {
    const [projectsRendered, setProjectsRendered] = useState(4);
    const [projectsRenderedButton, setProjectsRenderedButton] = useState(true);
    const [projects, setProjects] = useState(projectData);
    const showHideDescription = (givenKey) => {
        let prevProjects = [...projects];
        for (let i = 0; i < prevProjects.length; i += 1) {
            if (prevProjects[i].key === givenKey) {
                prevProjects[i].showDescription =
                    !prevProjects[i].showDescription;
                if (prevProjects[i].showFeatures === true)
                    prevProjects[i].showFeatures = false;
            }
        }
        setProjects(prevProjects);
    };
    const showHideFeatures = (givenKey) => {
        let prevProjects = [...projects];
        for (let i = 0; i < prevProjects.length; i += 1) {
            if (prevProjects[i].key === givenKey) {
                prevProjects[i].showFeatures = !prevProjects[i].showFeatures;
                if (prevProjects[i].showDescription === true)
                    prevProjects[i].showDescription = false;
            }
        }
        setProjects(prevProjects);
    };
    const changeProjectsRendered = () => {
        projectsRendered > 4
            ? setProjectsRendered(4)
            : setProjectsRendered(projects.length);
    };
    const removeShowMoreButton = () => {
        if (window.innerWidth > 700) {
            setProjectsRenderedButton(false);
            setProjectsRendered(projects.length);
        } else {
            setProjectsRenderedButton(true);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", removeShowMoreButton);
    },);
    return (
        <div className="projects-container">
            {projects.map((project, j) => {
                if (j < projectsRendered)
                    return (
                        <div key={project.key} className="project-card">
                            <img
                                className="project-card-screenshot"
                                src={project.src500}
                                srcSet={`${project.src500} 500w, 
                    ${project.src1000} 1000w`}
                                alt={`${project.name} screenshot`}
                            />
                            <div className="project-card-title-icons-repo-links-container">
                                <div className="project-card-title-icons-container">
                                    <h3>{project.name}</h3>
                                    <div className="compatible-made-with-container">
                                        <div className="compatible-icons">
                                            {project.compatible.map((icon) => {
                                                return icon;
                                            })}
                                        </div>
                                        <div className="made-with-icons">
                                            {project.madeWith.map((icon) => {
                                                return icon;
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-repo-links">
                                    <a
                                        href={project.gitHubRepository}
                                        target="_blank"
                                        rel="noreferrer"
                                        alt={`${project.name} github repository`}
                                    >
                                        <AiFillGithub />
                                    </a>

                                    <a
                                        href={project.livePreview}
                                        target="_blank"
                                        rel="noreferrer"
                                        alt={`${project.name} live preview`}
                                    >
                                        <RxOpenInNewWindow />
                                    </a>
                                </div>
                            </div>

                            <div className="drop-down-container">
                                <section
                                    className="project-card-description"
                                    style={{
                                        opacity: project.showDescription
                                            ? "1"
                                            : "0",
                                        fontSize: project.showDescription
                                            ? "14px"
                                            : "0px",
                                        zIndex: project.showDescription
                                            ? "99"
                                            : "-99",
                                    }}
                                >
                                    <h5
                                        style={{
                                            fontSize: project.showDescription
                                                ? "22px"
                                                : "0px",
                                        }}
                                    >
                                        Description
                                    </h5>
                                    <p>{project.description}</p>
                                </section>
                                <section
                                    className="project-card-features"
                                    style={{
                                        opacity: project.showFeatures
                                            ? "1"
                                            : "0",
                                        fontSize: project.showFeatures
                                            ? "14px"
                                            : "0px",
                                        zIndex: project.showFeatures
                                            ? "99"
                                            : "-99",
                                        padding: project.showFeatures
                                            ? "3px 10px"
                                            : "0px 0px",
                                    }}
                                >
                                    <h5
                                        style={{
                                            fontSize: project.showFeatures
                                                ? "22px"
                                                : "0px",
                                        }}
                                    >
                                        Features
                                    </h5>
                                    <ul>
                                        {project.features.map((feature, i) => {
                                            return (
                                                <li key={`${project.key}${i}`}>
                                                    {feature}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </section>

                                <div className="show-hide-button-container">
                                    <button
                                        className="show-hide-description-button"
                                        style={{
                                            animation: project.showDescription
                                                ? "activeButtonGradient 0.3s linear both"
                                                : "activeButtonGradientReverse 0.3s linear both",
                                        }}
                                        onClick={() =>
                                            showHideDescription(project.key)
                                        }
                                    >
                                        {project.showDescription
                                            ? "Hide description"
                                            : "Show description"}
                                    </button>
                                    <button
                                        className="show-hide-features-button"
                                        style={{
                                            animation: project.showFeatures
                                                ? "activeButtonGradient 0.3s linear both"
                                                : "activeButtonGradientReverse 0.3s linear both",
                                        }}
                                        onClick={() =>
                                            showHideFeatures(project.key)
                                        }
                                    >
                                        {project.showFeatures
                                            ? "Hide features"
                                            : "Show features"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
            })}
            {projectsRenderedButton ? (
                <button
                    className="load-more-projects"
                    onClick={() => changeProjectsRendered()}
                >
                    Load {projectsRendered > 4 ? "less" : "more"} Projects
                </button>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Projects;
