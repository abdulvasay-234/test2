import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin as LinkedIn, Twitter, Github } from 'lucide-react';
import { trainersData } from '../data/trainersData';

const TrainersPage: React.FC = () => {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 }
    },
    exit: { opacity: 0 }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Meet Our Expert Trainers
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-100 mb-8"
              variants={itemVariants}
            >
              Learn from industry professionals with extensive experience in their respective fields. Our trainers bring real-world knowledge and cutting-edge expertise to every class.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Trainers Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {trainersData.map((trainer) => (
              <motion.div 
                key={trainer.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img 
                      className="h-64 w-full md:w-60 object-cover"
                      src={trainer.image} 
                      alt={trainer.name} 
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{trainer.name}</h2>
                    <p className="text-accent-600 font-medium mb-4">{trainer.role}</p>
                    
                    <p className="text-gray-700 mb-4">{trainer.bio}</p>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {trainer.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 mt-6">
                      {trainer.socialLinks.linkedin && (
                        <a 
                          href={trainer.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary-600 transition-colors"
                          aria-label={`${trainer.name}'s LinkedIn profile`}
                        >
                          <LinkedIn className="h-5 w-5" />
                        </a>
                      )}
                      
                      {trainer.socialLinks.twitter && (
                        <a 
                          href={trainer.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary-600 transition-colors"
                          aria-label={`${trainer.name}'s Twitter profile`}
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      
                      {trainer.socialLinks.github && (
                        <a 
                          href={trainer.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary-600 transition-colors"
                          aria-label={`${trainer.name}'s GitHub profile`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Join Our Teaching Team
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-primary-100"
              variants={itemVariants}
            >
              Are you an expert in your field with a passion for teaching? We're always looking for talented professionals to join our team of trainers.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TrainersPage;