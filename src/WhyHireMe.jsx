import React from 'react';
import './why.css';
import scholar from './images/scholarship.png';
import project from './images/project.png';
import hackerrank from './images/hacker_rank.png';
import linkedin from './images/linkedin.png';

import { motion } from 'framer-motion';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            viewport={{
                once: true
            }}
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            <div className="neww">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={scholar} alt="" className='why_logo' />
                            <h4 className='mid_text'>2022</h4>
                            <p className='main_text_why'>FAST NUCES Graduate</p>
                        </div>
                        <div className="box">
                            <img src={project} alt="" className='why_logo' />
                            <h4 className='mid_text'>20+</h4>
                            <p className='main_text_why'>Completed Projects</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={linkedin} alt="" className='why_logo' />
                            <h4 className='mid_text'>500+</h4>
                            <p className='main_text_why'>Linked in Connections</p>
                        </div>
                        <div className="box ">
                            <img src={hackerrank} alt="" className='why_logo' />
                            <h4 className='mid_text'>40+</h4>
                            <p className='main_text_why'>HackerRank SOlved </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default WhyHireMe;
