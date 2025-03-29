import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h2 className='heading1 '>Skills</h2>
      <h3 className='heading2'>Web Development Languages and Technologies</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={77} fill="#03B0FD" txt="Node" />
          <SemiDonutChart percentage={67} fill="#03B0FD" txt="Express" />
          <SemiDonutChart percentage={90} fill="#03B0FD" txt="JavaScript" />
        </div>
        <div className="flex">
          <SemiDonutChart percentage={72} fill="#03B0FD" txt="React JS" />
          <SemiDonutChart percentage={79} fill="#03B0FD" txt="Next JS" />
          <SemiDonutChart percentage={48} fill="#03B0FD" txt="TypeScript" />
          <SemiDonutChart percentage={55} fill="#03B0FD" txt="Graph QL" />
          <SemiDonutChart percentage={81} fill="#03B0FD" txt="ANT Design" />
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>AI-ML Development Languages and Technologies</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="Python" />
            <SemiDonutChart percentage={50} fill="#03B0FD" txt="LangChain" />
            <SemiDonutChart percentage={60} fill="#03B0FD" txt="AI Agents" />
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Chat Bot" />
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="Selinium" />
            <SemiDonutChart percentage={50} fill="#03B0FD" txt="Beautiful soap" />
            <SemiDonutChart percentage={60} fill="#03B0FD" txt="LLMs" />
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="NLP" />
          </div>

        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ margin: "-100px", once: true }}
        >
          <h3 className='heading3'>Mobile Development Languages and Technologies</h3>
          <div className="contents">
            <div className="flex">
              <SemiDonutChart percentage={80} fill="#03B0FD" txt="Dart" />
              <SemiDonutChart percentage={87} fill="#03B0FD" txt="Flutter" />
              <SemiDonutChart percentage={80} fill="#03B0FD" txt="React Native" />
              <SemiDonutChart percentage={70} fill="#03B0FD" txt="Java" />

            </div>

          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;

