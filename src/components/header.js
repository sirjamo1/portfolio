import profilePic_500w from "../assets/images/profilePic_500w.jpg";
import profilePic_1000w from "../assets/images/profilePic_1000w.jpg";
import profilePic_1600w from "../assets/images/profilePic_1600w.jpg";
import SocialLinks from "./SocialLinks";


const Header = () => {
    return (
        <header>
            <div className="profile-pic-container">
                <img
                    className="profile-pic"
                    src={profilePic_500w}
                    srcSet={`${profilePic_500w} 500w, 
                    ${profilePic_1000w} 1000w , 
                    ${profilePic_1600w} 1600w`}
                    alt="James Howells"
                />
                <h1>James Howells</h1>
            </div>
            <div className="about-me-container">
                <h2>About me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ac lorem ac sapien convallis consectetur eu ac
                    metus. Maecenas ac interdum diam. Nulla ullamcorper turpis
                    risus, id dapibus nulla commodo in. Vivamus tincidunt ipsum
                    lectus, sed venenatis metus lobortis ut. Maecenas fringilla
                    risus lobortis nibh condimentum, eu tristique libero congue.
                    Sed volutpat nunc eget massa semper, id faucibus nisl
                    dictum. Suspendisse egestas tortor id mauris iaculis, eu
                    malesuada nulla fermentum.
                </p>
            </div>
            <SocialLinks gitHubHref={"https://github.com/sirjamo1"} />
        </header>
    );
};

export default Header;
