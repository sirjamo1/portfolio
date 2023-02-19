import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
} from "react-icons/ai";


const SocialLinks = ({gitHubHref}) => {
 return (
     <div className="social-links-container">
         <ul>
             <li>
                 <a
                     href={gitHubHref}
                     target="_blank"
                     rel="noreferrer"
                     alt="James Howells github"
                 >
                     <AiFillGithub />
                 </a>
             </li>
             <li>
                 <a
                     href="https://github.com/sirjamo1"
                     target="_blank"
                     rel="noreferrer"
                     alt="James Howells github"
                 >
                     <AiFillLinkedin />
                 </a>
             </li>
             <li>
                 <a
                     href="https://github.com/sirjamo1"
                     target="_blank"
                     rel="noreferrer"
                     alt="James Howells github"
                 >
                     <AiFillTwitterCircle />
                 </a>
             </li>
         </ul>
     </div>
 );
}

export default SocialLinks