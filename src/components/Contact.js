import SocialLinks from "./SocialLinks";

const Contact = () => {
    return (
        <footer className="contact-container">
            <h2>Contact me</h2>
            <h4>Please get in touch</h4>
            <p>Located in Brisbane, Australia</p>
            <p>Mob: 0448 121 814</p>
            <p>E-mail : jam_how@hotmail.com</p>

            <SocialLinks gitHubHref={"https://github.com/sirjamo1"} />
        </footer>
    );
};

export default Contact;
