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
import rockPaperScissors_500 from "../assets/screenshots/rock-paper-scissors-500.png";
import rockPaperScissors_1000 from "../assets/screenshots/rock-paper-scissors-1000.png";
import tenzies_500 from "../assets/screenshots/react-tenzies-game-500.png";
import tenzies_1000 from "../assets/screenshots/react-tenzies-game-1000.png";

import { ReactComponent as HtmlSvg } from "../assets/skills/html.svg";
import { ReactComponent as CssSvg } from "../assets/skills/css.svg";
import { ReactComponent as JavaScriptSvg } from "../assets/skills/javaScript.svg";
import { ReactComponent as ReactJsSvg } from "../assets/skills/reactJs.svg";
import { ReactComponent as FirebaseSvg } from "../assets/skills/firebase.svg";
import { ReactComponent as WebpackSvg } from "../assets/skills/webpack.svg";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineMobileFriendly, MdComputer } from "react-icons/md";
import { RxOpenInNewWindow } from "react-icons/rx";



const projectData = [
    {
        name: "Wheres Waldo",
        key: 0,
        src500: wheresWaldo_500,
        src1000: wheresWaldo_1000,
        showDescription: false,
        showFeatures: false,
        compatible: [<MdComputer />],
        madeWith: [
            <ReactJsSvg />,
            <JavaScriptSvg />,
            <CssSvg />,
            <HtmlSvg />,
            <FirebaseSvg />,
        ],
        description:
            "Find Waldo and friends in a timed challenge, (best suited for pc).",
        features: [
            "Timer starts when user clicks start, stops when last character is found.",
            "Option to submit score to leader board.",
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
        compatible: [<MdComputer />],
        madeWith: [<WebpackSvg />, <JavaScriptSvg />, <CssSvg />, <HtmlSvg />],
        description: "Classic battleships game with a few modern twists.",
        features: [
            "Place ships on board by dragging/dropping (either horizontal or vertical).",
            "Random placement for a quick game.",
            "Sonar (P1: Reveals ships with two blinks of opacity change. P2: Next shot Guaranteed).",
            "Wrench (repair a ship).",
            "Text log for each move/incident (type writer animation).",
            "Sounds for boat placement, hit, miss, sunk ship, sonar wrench and digital typewriter.",
            "Reset game.",
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
        compatible: [<MdComputer />, <MdOutlineMobileFriendly />],
        madeWith: [
            <ReactJsSvg />,
            <JavaScriptSvg />,
            <CssSvg />,
            <HtmlSvg />,
            <FirebaseSvg />,
        ],
        description:
            "Bean Gram is Mr Beans take on a simplified Facebook/Instagram.",
        features: [
            "Sign in/create account with email and password or can sign in with google.",
            "Change user profile picture and name.",
            "Upload picture with description.",
            "Comment on images.",
            "Like images.",
            "Fully responsive.",
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
        compatible: [<MdComputer />],
        madeWith: [<ReactJsSvg />, <JavaScriptSvg />, <CssSvg />, <HtmlSvg />],
        description: "Create and edit a CV.",
        features: ["Add and delete sections", "Edit information in sections"],
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
        compatible: [<MdComputer />, <MdOutlineMobileFriendly />],
        madeWith: [<WebpackSvg />, <JavaScriptSvg />, <CssSvg />, <HtmlSvg />],
        description:
            "Weather app, user types in a location to find the current and forecast weather.",
        features: [
            "Searches user input in json file to retrieve an id.",
            "Uses id to fetch api from https://openweathermap.org (free version).",
            "Sorts/calculates data into highs, lows etc.",
            "Toggle switch to view temperatures in celsius or fahrenheit.",
            "Shows forecast of available data.",
            "Changing wind direction image.",
            "Backgrounds change depending on the city local time.",
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
        compatible: [<MdComputer />, <MdOutlineMobileFriendly />],
        madeWith: [<ReactJsSvg />, <JavaScriptSvg />, <CssSvg />, <HtmlSvg />],
        description:
            "Memory game in which the user cannot click the same image twice.",
        features: [
            "Shuffles cards after each click.",
            "Resets score if card is clicked twice.",
            "Logs score to high score.",
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
        compatible: [<MdComputer />, <MdOutlineMobileFriendly />],
        madeWith: [<JavaScriptSvg />, <CssSvg />, <HtmlSvg />],
        description:
            "Etch a Sketch is a remake of the classic toy, draw continuos drawings.",
        features: [
            "When mouse moves over the display, squares turn black.",
            "Number of squares per row can be changed, to make sharper drawings.",
            "Square color options, black, gradient and multicolored.",
            "Random button will fill the display with multicolored squares.",
            "Reset screen to blank (with a shake animation).",
            "Buttons spin when clicked",
            "Sounds include drawing, clicking and shaking.",
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
        compatible: [<MdComputer />, <MdOutlineMobileFriendly />],
        madeWith: [<JavaScriptSvg />, <CssSvg />, <HtmlSvg />],
        description: "Image slider to view your favorite pictures.",
        features: [
            "Image changes every 5 seconds.",
            "Photographers name changes with image.",
            "Image alt changes with image.",
            "Dots change with image.",
            "Click image to pause/resume 5 second changes.",
            "Click left/right/dot buttons to change image (also resumes 5 second changes).",
            "Animation pause/play pops up on click.",
        ],
        gitHubRepository: "https://github.com/sirjamo1/image-slider",
        livePreview: "https://sirjamo1.github.io/Image-Slider/",
    },
    {
        name: "Rock Paper Scissors",
        key: 8,
        src500: rockPaperScissors_500,
        src1000: rockPaperScissors_1000,
        showDescription: false,
        showFeatures: false,
        compatible: [<MdComputer />, <MdOutlineMobileFriendly />],
        madeWith: [<JavaScriptSvg />, <CssSvg />, <HtmlSvg />],
        description: "Classic rock paper scissors game.",
        features: [
            "First to 5 Wins.",
            "Sounds include rock, paper, scissors, cheer and you lose.",
            "Text describing the round and end result.",
        ],
        gitHubRepository: "https://github.com/sirjamo1/Rock-Paper-Scissors",
        livePreview: "https://sirjamo1.github.io/Rock-Paper-Scissors/",
    },
    {
        name: "Tenzies Game",
        key: 9,
        src500: tenzies_500,
        src1000: tenzies_1000,
        showDescription: false,
        showFeatures: false,
        compatible: [<MdComputer />, <MdOutlineMobileFriendly />],
        madeWith: [<ReactJsSvg />, <JavaScriptSvg />, <CssSvg />, <HtmlSvg />],
        description:
            "Roll a dice and save a selection, then roll again until all dice are the same.",
        features: [
            "Rolls all un-highlighted dice.",
            "Keeps track of number of rolls and time.",
            "Keeps track of high scores.",
        ],
        gitHubRepository: "https://github.com/sirjamo1/React-Tenzies-Game",
        livePreview: "https://sirjamo1.github.io/React-Tenzies-Game/",
    },
];
export {projectData}