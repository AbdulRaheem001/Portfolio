
import './main2.css'
import github from './images/github.png'
import linked_in from './images/linked_in.png'
import { motion } from 'framer-motion';
import myImage from './images/abdul_raheem.png';
import gmail from './images/gmail.png'
import { faImages } from '@fortawesome/free-solid-svg-icons';



const Main = () => {
  return (
    <motion.div
    variants={{
      hidden:{opacity:0,y:50},
      visible:{opacity:1,y:0}
    }}
    initial="hidden"
    animate="visible"
    transition={{
      duration:0.6, delay:0.2
    }}
    className='Main' id="mainy">
      <div className="main_left">
        <h3 className='it_is_me'>Hey! It's Me</h3>
        <h2 className='names'>Abdul Raheem</h2>
        <p className='i_am_a'>I am a&nbsp;<span class="typewriter"></span></p>
        
        <div className="flex1">
        <p className='follow_me'>follow me: </p>
        <div className="logos">
        <a href="raheem.abdul.dev@gmail.com"><img src={gmail} alt="Gmail" /></a>
        <a href="https://github.com/AbdulRaheem001" target="_blank" rel="noreferrer"><img src={github} alt="Github profile"  /></a>
        <a href="https://www.linkedin.com/in/abdul-raheem007/" target="_blank" rel="noreferrer"><img src={linked_in} alt=""></img></a>
        </div>
        </div>
        <div className="flex1">
        <a href="raheem.abdul.dev@gmail.com"><button className='buttonc'>E-Mail Me</button></a>
        <button onClick={() => window.open("https://drive.google.com/file/d/1nYC8dZnE1iCuLF6R2yplQ_rBZ0LiHd7m/view?usp=sharing", "_blank")} className='buttonb'>Resume</button>
        </div>
      </div>
      <div className="right_main">
      <img className='behind_the_image' src={myImage} alt="Portfolio Image"></img>
      </div>
    </motion.div>
  )
}

export default Main
