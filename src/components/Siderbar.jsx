import SocialNetWorks from './SocialNetWorks'
import Avatar from '../img/lucasimg.jpeg'


import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer'



const SideBar = () =>{
    return (
       <aside id="sidebar">
        <img  src={Avatar} alt="Lucas Tavares"/>
        <p className="title">Desenvolvedor</p>
        <SocialNetWorks />
        <InformationContainer />
        <a href='' className='btn'>
            Download Currículo
        </a>
    

       </aside>
    )
}

export default SideBar