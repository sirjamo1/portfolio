//need to import
import { ReactComponent as HtmlSvg } from "../assets/skills/html.svg";
import { ReactComponent as CssSvg } from "../assets/skills/css.svg";
import { ReactComponent as JavaScriptSvg } from "../assets/skills/javaScript.svg";
import { ReactComponent as ReactJsSvg } from "../assets/skills/reactJs.svg";
import { ReactComponent as GitSvg } from "../assets/skills/git.svg";
import { ReactComponent as FirebaseSvg } from "../assets/skills/firebase.svg";
import { ReactComponent as VsCodeSvg } from "../assets/skills/vsCode.svg";
import { ReactComponent as WebpackSvg } from "../assets/skills/webpack.svg";
import { ReactComponent as NpmSvg } from "../assets/skills/npm.svg";

// Languages: js, html, css,
//Technologies: Reactjs
//Other tools: git, weppack, vsCode, npm, gimp, github
const Skills = () => {
    return (
        <section className="skills-container">
            <HtmlSvg  />
            <CssSvg  />
            <JavaScriptSvg  />
            <ReactJsSvg  />
            <WebpackSvg  />
            <FirebaseSvg  />
            <GitSvg  />
            <VsCodeSvg  />
            <NpmSvg  />
        </section>
    );
};

export default Skills;
