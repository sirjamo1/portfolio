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
import imageSlider_500 from "../assets/screenshots/image-slider-500.png";
import imageSlider_1000 from "../assets/screenshots/image-slider-1000.png";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { DiCss3, DiReact, DiHtml5, DiJavascript1 } from "react-icons/di";
import { SiFirebase } from "react-icons/si";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            name: "Wheres Waldo",
            key: 0,
            src500: wheresWaldo_500,
            src1000: wheresWaldo_1000,
            showDescription: false,
            showFeatures: false,
            madeWith: [
                <DiReact />,
                <DiJavascript1 />,
                <DiCss3 />,
                <DiHtml5 />,
                <SiFirebase />,
            ],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            features: [
                "Timer starts when user clicks start, stops when last character is found.",
                "Option to submit score to leader board (fireStore).",
                "Updates best score.",
                "View leader board.",
                "Characters fade when found.",
                "Animation on timer container when starting and finishing.",
            ],
            gitHubRepository: "https://github.com/sirjamo1/wheres-waldo",
            livePreview: "https://sirjamo1.github.io/wheres-waldo/",
        },
        {
            name: "Battleships",
            key: 1,
            src500: battleships_500,
            src1000: battleships_1000,
            showDescription: false,
            showFeatures: false,
            madeWith: [<DiJavascript1 />, <DiCss3 />, <DiHtml5 />],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            features: [
                "Timer starts when user clicks start, stops when last character is found.",
                "Option to submit score to leader board (fireStore).",
                "Updates best score.",
                "View leader board.",
                "Characters fade when found.",
                "Animation on timer container when starting and finishing.",
            ],
            gitHubRepository: "https://github.com/sirjamo1/battleship",
            livePreview: "https://sirjamo1.github.io/Battleship/",
        },
        {
            name: "Bean Gram",
            key: 2,
            src500: beanGram_500,
            src1000: beanGram_1000,
            showDescription: false,
            showFeatures: false,
            madeWith: [
                <DiReact />,
                <DiJavascript1 />,
                <DiCss3 />,
                <DiHtml5 />,
                <SiFirebase />,
            ],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            features: [
                "Timer starts when user clicks start, stops when last character is found.",
                "Option to submit score to leader board (fireStore).",
                "Updates best score.",
                "View leader board.",
                "Characters fade when found.",
                "Animation on timer container when starting and finishing.",
            ],
            gitHubRepository: "https://github.com/sirjamo1/bean-gram",
            livePreview: "https://sirjamo1.github.io/bean-gram/",
        },
        {
            name: "CV Project",
            key: 3,
            src500: cvProject_500,
            src1000: cvProject_1000,
            showDescription: false,
            showFeatures: false,
            madeWith: [<DiReact />, <DiJavascript1 />, <DiCss3 />, <DiHtml5 />],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            features: [
                "Timer starts when user clicks start, stops when last character is found.",
                "Option to submit score to leader board (fireStore).",
                "Updates best score.",
                "View leader board.",
                "Characters fade when found.",
                "Animation on timer container when starting and finishing.",
            ],
            gitHubRepository: "https://github.com/sirjamo1/cv-project",
            livePreview: "https://sirjamo1.github.io/cv-project/",
        },
        {
            name: "Weather App",
            key: 4,
            src500: weatherApp_500,
            src1000: weatherApp_1000,
            showDescription: false,
            showFeatures: false,
            madeWith: [<DiJavascript1 />, <DiCss3 />, <DiHtml5 />],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            features: [
                "Timer starts when user clicks start, stops when last character is found.",
                "Option to submit score to leader board (fireStore).",
                "Updates best score.",
                "View leader board.",
                "Characters fade when found.",
                "Animation on timer container when starting and finishing.",
            ],
            gitHubRepository: "https://github.com/sirjamo1/weather-app",
            livePreview: "https://sirjamo1.github.io/weather-App/",
        },
        {
            name: "Memory Game",
            key: 5,
            src500: memoryGame_500,
            src1000: memoryGame_1000,
            showDescription: false,
            showFeatures: false,
            madeWith: [<DiReact />, <DiJavascript1 />, <DiCss3 />, <DiHtml5 />],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            features: [
                "Timer starts when user clicks start, stops when last character is found.",
                "Option to submit score to leader board (fireStore).",
                "Updates best score.",
                "View leader board.",
                "Characters fade when found.",
                "Animation on timer container when starting and finishing.",
            ],
            gitHubRepository: "https://github.com/sirjamo1/memory-game",
            livePreview: "https://sirjamo1.github.io/memory-game/",
        },
        {
            name: "Etch a Sketch",
            key: 6,
            src500: etchASketch_500,
            src1000: etchASketch_1000,
            showDescription: false,
            showFeatures: false,
            madeWith: [<DiJavascript1 />, <DiCss3 />, <DiHtml5 />],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            features: [
                "Timer starts when user clicks start, stops when last character is found.",
                "Option to submit score to leader board (fireStore).",
                "Updates best score.",
                "View leader board.",
                "Characters fade when found.",
                "Animation on timer container when starting and finishing.",
            ],
            gitHubRepository: "https://github.com/sirjamo1/etch-a-sketch",
            livePreview: "https://sirjamo1.github.io/Etch-a-Sketch/",
        },
        {
            name: "Image Slider",
            key: 7,
            src500: imageSlider_500,
            src1000: imageSlider_1000,
            showDescription: false,
            showFeatures: false,
            madeWith: [<DiJavascript1 />, <DiCss3 />, <DiHtml5 />],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent ac lorem ac sapien convallis consectetur eu ac metus. Maecenas ac interdum diam. Nulla ullamcorper turpis risus, id dapibus nulla commodo in.",
            features: [
                "Timer starts when user clicks start, stops when last character is found.",
                "Option to submit score to leader board (fireStore).",
                "Updates best score.",
                "View leader board.",
                "Characters fade when found.",
                "Animation on timer container when starting and finishing.",
            ],
            gitHubRepository: "https://github.com/sirjamo1/image-slider",
            livePreview: "https://sirjamo1.github.io/Image-Slider/",
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
    const showHideFeatures = (givenKey) => {
        let prevProjects = [...projects];
        for (let i = 0; i < prevProjects.length; i += 1) {
            if (prevProjects[i].key === givenKey)
                prevProjects[i].showFeatures = !prevProjects[i].showFeatures;
        }
        setProjects(prevProjects);
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
                            <div className="made-with-icons">
                                {project.madeWith.map((icon) => {
                                    return icon;
                                })}
                            </div>
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
                        <section
                            className="project-card-features"
                            style={{
                                opacity: project.showFeatures ? "1" : "0",
                                fontSize: project.showFeatures ? "1rem" : "0px",
                            }}
                        >
                     
                            <h5>Features</h5>
                            <ul>
                                {project.features.map((feature) => {
                                    return <li>{feature}</li>;
                                })}
                            </ul>
                        </section>

                        <div className="show-hide-button-container">
                            <button
                                className="show-hide-description-button"
                                onClick={() => showHideDescription(project.key)}
                            >
                                {project.showDescription
                                    ? "Hide description"
                                    : "Show description"}
                            </button>
                            <button
                                className="show-hide-features-button"
                                onClick={() => showHideFeatures(project.key)}
                            >
                                {project.showFeatures
                                    ? "Hide features"
                                    : "Show features"}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;

// <ul>
//     {project.features.map((feature) => {
//         return <li>{feature}</li>;
//     })}
// </ul>;
