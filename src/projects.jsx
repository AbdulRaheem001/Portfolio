import React from 'react'
import Card from './Card';
import restaurant from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import chess from"./images/chess.jpg"
import snake from "./images/snake.jpg"
import wise_way from"./images/wise_way.jpg"
import chatbot from "./images/chatbot.png"
import bookmanagmentsystem from "./images/bookmanagementsystem.jpeg"
import gamingplatform from "./images/gamingplatform.jpeg"
import graphQl from "./images/graphQL.png"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: gamingplatform,
          altText: 'Gaming Tournament Platform',
          title: 'Gaming Tournament Platform',
          description: 'A platform to organize and manage gaming tournaments with seamless user interaction and functionality',
          explore:"https://github.com/AbdulRaheem001/gamming-tornament-platform-BE"
        },
        {
          imageUrl:graphQl,
          altText: 'GraphQL Project',
          title: 'GraphQL Project',
          description: 'An AI-powered chess system that recognizes physical pieces and plays autonomously using computer vision and advanced game algorithms',
          explore:"https://github.com/AbdulRaheem001/GraphQL-BE"

        },
        {
          imageUrl: bookmanagmentsystem,
          altText: 'Book Management System',
          title: 'Book Management System',
          description: "An innovative twist on the classic snake game, allowing players to control the snake's movements through hand gestures for an engaging experience.",
          explore:"https://github.com/AbdulRaheem001/book-management-system-be"
        },
        {
            imageUrl: chatbot,
            altText: 'Custom ChatBot',
            title: 'Custom Chatbot',
            description: "An AI-powered chatbot designed to provide intelligent and personalized responses for enhanced user interaction.",
            explore:"https://github.com/AbdulRaheem001/Custom-CahtBot"
          }
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
