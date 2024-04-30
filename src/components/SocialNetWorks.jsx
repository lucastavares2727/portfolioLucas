import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name : "linkedin", href:"https://www.linkedin.com/in/lucas-azevedo-5611821a7/", icon: <FaLinkedinIn /> },
    {name: "github", href:"https://github.com/lucastavares2727", icon:<FaGithub /> },
    {name : "instagram", href:"https://www.instagram.com/lucasazevedortz/", icon: <FaInstagram />},
];

const SocialNetWorks = () => {
    return <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a href={network.href} className='social-btn' id={network.name} 
            key={network.name}>
                {network.icon}
            </a>

        ))}

    </section>
};

export default SocialNetWorks;