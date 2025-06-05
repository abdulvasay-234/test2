import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, Users, Calendar, Award, BookOpen } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import { coursesData } from '../data/coursesData';

const HomePage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transform Your Career with Cutting-Edge Skills
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lords Skill Academy offers industry-leading courses in Full Stack Java and Data Science with GenAI integration. Learn from experts and gain the skills employers are seeking.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/courses" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Explore Courses
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white/10">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 -mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Lords Skill Academy?</h2>
            <p className="text-lg text-gray-600">Our academy is designed to provide you with the most relevant skills for today's job market.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Feature 1 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of real-world experience in their respective fields.</p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cutting-Edge Curriculum</h3>
              <p className="text-gray-600">Our courses integrate the latest technologies including Generative AI to prepare you for tomorrow's challenges.</p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p className="text-gray-600">Structured programs with flexible schedules to accommodate working professionals and full-time students alike.</p>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Recognized</h3>
              <p className="text-gray-600">Our certifications are recognized by leading employers across the technology sector.</p>
            </motion.div>
            
            {/* Feature 5 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow lg:col-span-2"
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Support</h3>
              <p className="text-gray-600">Comprehensive career services including resume building, interview preparation, and job placement assistance to help you land your dream role.</p>
              <div className="mt-4">
                <Link to="/contact" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Courses</h2>
            <p className="text-lg text-gray-600">Explore our specialized programs designed to equip you with in-demand skills.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {coursesData.map((course) => (
              <motion.div key={course.id} variants={fadeIn}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link to="/courses" className="btn btn-primary">
              View All Courses
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Hear from our alumni about their experience and success after completing our courses.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeIn}>
              <TestimonialCard 
                name="Alex Johnson"
                role="Java Developer at TechCorp"
                image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
                testimonial="The Full Stack Java course completely transformed my career. Within three months of graduation, I landed a developer role with a 40% salary increase."
                course="Full Stack Java with Gen AI"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <TestimonialCard 
                name="Sarah Miller"
                role="Data Scientist at DataTech"
                image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
                testimonial="The practical approach to Data Science combined with GenAI integration gave me a competitive edge in the job market. The instructors were phenomenal."
                course="Data Science with Gen AI"
              />
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <TestimonialCard 
                name="Michael Chen"
                role="Full Stack Developer at InnovateSoft"
                image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
                testimonial="The curriculum was challenging but extremely rewarding. The skills I gained are exactly what employers are looking for right now."
                course="Full Stack Java with Gen AI"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-700 text-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-primary-100">Join thousands of successful graduates who have advanced their careers through Lords Skill Academy.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/courses" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Browse Courses
              </Link>
              <Link to="/contact" className="btn bg-primary-600 text-white border border-primary-500 hover:bg-primary-800">
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;