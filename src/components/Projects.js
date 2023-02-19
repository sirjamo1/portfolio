import wheresWaldo_500 from "../assets/screenshots/wheres-waldo-500.png";
import wheresWaldo_1000 from "../assets/screenshots/wheres-waldo-1000.png";
import beanGram_500 from "../assets/screenshots/bean-gram-500.png";
import beanGram_1000 from "../assets/screenshots/bean-gram-1000.png";
import cvProject_500 from "../assets/screenshots/cv-project-500.png";
import cvProject_1000 from "../assets/screenshots/cv-project-1000.png";
import memoryGame_500 from "../assets/screenshots/memory-game-500.png";
import memoryGame_1000 from "../assets/screenshots/memory-game-1000.png";
import battleships_500 from "../assets/screenshots/battleships-500.png";
import battleships_1000 from "../assets/screenshots/battleships-1000.png";
import etchASketch_500 from "../assets/screenshots/etch-a-sketch-500.png";
import etchASketch_1000 from "../assets/screenshots/etch-a-sketch-1000.png";
import weatherApp_500 from "../assets/screenshots/weather-app-500.png";
import weatherApp_1000 from "../assets/screenshots/weather-app-1000.png";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
 //NEED to add in new projects to list
    const [projects, setProjects] = useState([
        {
            name: "Wheres Waldo",
            key: 0,
            src500: wheresWaldo_500,
            src1000: wheresWaldo_1000,
            showDescription: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            gitHubRepository: "https://github.com/sirjamo1/wheres-waldo",
            livePreview: "https://sirjamo1.github.io/wheres-waldo/",
        },
        {
            name: "Bean Gram",
            key: 1,
            src500: beanGram_500,
            src1000: beanGram_1000,
            showDescription: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            gitHubRepository: "https://github.com/sirjamo1/bean-gram",
            livePreview: "https://sirjamo1.github.io/bean-gram/",
        },
        {
            name: "CV Project",
            key: 2,
            src500: cvProject_500,
            src1000: cvProject_1000,
            showDescription: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            gitHubRepository: "https://github.com/sirjamo1/cv-project",
            livePreview: "https://sirjamo1.github.io/cv-project/",
        },
        {
            name: "Memory Game",
            key: 3,
            src500: memoryGame_500,
            src1000: memoryGame_1000,
            showDescription: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            gitHubRepository: "https://github.com/sirjamo1/memory-game",
            livePreview: "https://sirjamo1.github.io/memory-game/",
        },
    ]);
    const showHideDescription = (givenKey) => {
        let prevProjects = [...projects];
        for (let i = 0; i < prevProjects.length; i += 1) {
            if (prevProjects[i].key === givenKey)
                prevProjects[i].showDescription =
                    !prevProjects[i].showDescription;
        }
        setProjects(prevProjects);
    };
    const getHeightOfElement = (eId) => {
        console.log(document.getElementById("eId"));
    };
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            {projects.map((project) => {
                return (
                    <div key={project.key} className="project-card">
                        <img
                            className="project-card-screenshot"
                            src={project.src500}
                            srcSet={`${project.src500} 500w, 
                    ${project.src1000} 1000w`}
                            alt={`${project.name} screenshot`}
                        />
                        <div className="project-card-title-links">
                            <h4>{project.name}</h4>
                            <div className="project-card-icons">
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

                        <p
                            className="project-card-description"
                            style={{
                                opacity: project.showDescription ? "1" : "0",
                                fontSize: project.showDescription
                                    ? "1rem"
                                    : "0px",
                            }}
                        >
                            {project.description}
                        </p>

                        <button
                            className="show-hide-description-button"
                            onClick={() => showHideDescription(project.key)}
                        >
                            {project.showDescription
                                ? "Hide description"
                                : "Show description"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;

// {
//     project.showDescription ? (
//         <p className="project-card-description">{project.description}</p>
//     ) : (
//         <></>
//     );
// }
// <button
//     className="show-hide-description-button"
//     onClick={() => showHideDescription(project.key)}
// >
//     {project.showDescription ? "Hide description" : "Show description"}
// </button>;

// <div className="project-card">
//     <img
//         className="project-card-screenshot"
//         src={wheresWaldo_500}
//         srcSet={`${wheresWaldo_500} 500w,
//                    ${wheresWaldo_1000} 1000w`}
//         alt="James Howells"
//     />
//     <div className="project-card-title-links">
//         <h4>Wheres Waldo</h4>
//         <div className="project-card-icons">
//             <a
//                 href="https://github.com/sirjamo1/wheres-waldo"
//                 target="_blank"
//                 rel="noreferrer"
//                 alt="Wheres waldo github repository"
//             >
//                 <AiFillGithub />
//             </a>

//             <a
//                 href="https://sirjamo1.github.io/wheres-waldo/"
//                 target="_blank"
//                 rel="noreferrer"
//                 alt="Wheres waldo live preview"
//             >
//                 <RxOpenInNewWindow />
//             </a>
//         </div>
//     </div>
//     <p className="project-card-description">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
//         lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum
//         diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.
//     </p>
// </div>;
