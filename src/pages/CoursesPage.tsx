import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/coursesData';

const CoursesPage: React.FC = () => {
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
              Our Courses
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-100 mb-8"
              variants={itemVariants}
            >
              Explore our specialized programs designed to equip you with in-demand skills for today's technology landscape.
            </motion.p>
            
            <motion.div 
              className="max-w-2xl mx-auto relative"
              variants={itemVariants}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-md leading-5 bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-white focus:border-transparent transition duration-150"
                placeholder="Search for courses..." 
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {coursesData.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Course Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-lg text-gray-600">Browse our courses by subject area to find the perfect fit for your career goals.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            <div className="bg-primary-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-600 mb-4">Master programming languages and frameworks for web and mobile development.</p>
              <a href="#" className="text-primary-600 font-medium hover:text-primary-700">Explore Courses</a>
            </div>
            
            <div className="bg-secondary-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Data Science & Analytics</h3>
              <p className="text-gray-600 mb-4">Learn to extract insights from data and build predictive models.</p>
              <a href="#" className="text-secondary-600 font-medium hover:text-secondary-700">Explore Courses</a>
            </div>
            
            <div className="bg-accent-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-gray-600 mb-4">Discover how to implement and leverage AI in practical applications.</p>
              <a href="#" className="text-accent-600 font-medium hover:text-accent-700">Explore Courses</a>
            </div>
            
            <div className="bg-green-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Cloud Computing</h3>
              <p className="text-gray-600 mb-4">Master cloud platforms and learn to build scalable infrastructure.</p>
              <a href="#" className="text-green-600 font-medium hover:text-green-700">Coming Soon</a>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">DevOps & CI/CD</h3>
              <p className="text-gray-600 mb-4">Learn to streamline development and operations workflows.</p>
              <a href="#" className="text-purple-600 font-medium hover:text-purple-700">Coming Soon</a>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Develop skills to protect systems and data from security threats.</p>
              <a href="#" className="text-yellow-600 font-medium hover:text-yellow-700">Coming Soon</a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our courses and enrollment process.</p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={itemVariants}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">What are the prerequisites for enrolling in your courses?</h3>
              <p className="text-gray-600">Each course has specific prerequisites listed on its detail page. Generally, we recommend basic programming knowledge for technical courses, but many of our courses are designed to accommodate beginners.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">How long do I have access to course materials?</h3>
              <p className="text-gray-600">You'll have lifetime access to all course materials after enrollment, including any future updates to the curriculum.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Do you offer job placement assistance?</h3>
              <p className="text-gray-600">Yes, we provide comprehensive career support including resume building, interview preparation, and connections with our network of hiring partners.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Are there any payment plans available?</h3>
              <p className="text-gray-600">We offer flexible payment options including monthly installments and income-share agreements for eligible students. Contact our admissions team for details.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Can I switch between courses if I change my mind?</h3>
              <p className="text-gray-600">Yes, you can transfer between courses within the first two weeks of enrollment. Please contact our student support team to arrange this.</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-700 text-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 text-primary-100">Enroll today and start your journey toward a rewarding career in tech.</p>
            <a href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CoursesPage;