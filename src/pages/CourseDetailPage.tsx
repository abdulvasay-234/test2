import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, CheckCircle, Download, Users, ArrowLeft } from 'lucide-react';
import { coursesData } from '../data/coursesData';
import { trainersData } from '../data/trainersData';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = coursesData.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="py-32 container-custom text-center">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="mb-8">The course you're looking for doesn't exist or has been removed.</p>
        <Link to="/courses" className="btn btn-primary">
          Back to Courses
        </Link>
      </div>
    );
  }
  
  // Find trainers for this course
  const courseTrainers = trainersData.filter(trainer => 
    trainer.courses.includes(course.id)
  );
  
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${course.image})` }}></div>
        <div className="container-custom relative z-10">
          <Link to="/courses" className="inline-flex items-center text-white hover:text-primary-200 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Courses
          </Link>
          
          <motion.div 
            className="max-w-4xl"
            variants={itemVariants}
          >
            <span className="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {course.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {course.title}
            </h1>
            
            <p className="text-xl mb-8 text-primary-100">
              {course.description}
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary-300" />
                <span>{course.duration}</span>
              </div>
              
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary-300" />
                <span>{course.students} students enrolled</span>
              </div>
              
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary-300" />
                <span>{course.modules} modules</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Apply Now
              </Link>
              
              <a
                href={course.syllabusUrl}
                download
                className="btn bg-transparent border-2 border-white hover:bg-white/10 flex items-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Syllabus
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
                <p className="text-gray-700 mb-8">
                  {course.description} This comprehensive program is designed to equip you with the practical skills and theoretical knowledge needed to excel in the industry. Through hands-on projects and expert instruction, you'll master the technologies and methodologies that employers value most.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {course.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Curriculum</h3>
                <div className="space-y-6 mb-8">
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h4 className="text-lg font-semibold">{module.title}</h4>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start">
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mr-3">
                                {topicIndex + 1}
                              </span>
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Prerequisites</h3>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                  {course.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="text-gray-700">{prerequisite}</li>
                  ))}
                </ul>
                
                <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {course.tools.map((tool, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div variants={itemVariants}>
                <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{course.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Enrolled</p>
                        <p className="font-medium">{course.students} students</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-primary-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Modules</p>
                        <p className="font-medium">{course.modules} modules</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold mb-4">Instructors</h4>
                    <div className="space-y-4">
                      {courseTrainers.map((trainer) => (
                        <div key={trainer.id} className="flex items-center">
                          <img 
                            src={trainer.image} 
                            alt={trainer.name} 
                            className="h-10 w-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <p className="font-medium">{trainer.name}</p>
                            <p className="text-sm text-gray-600">{trainer.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link 
                      to="/contact" 
                      className="btn btn-primary w-full text-center"
                    >
                      Apply Now
                    </Link>
                    
                    <a
                      href={course.syllabusUrl}
                      download
                      className="btn btn-outline w-full flex items-center justify-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coursesData
                .filter(c => c.id !== course.id)
                .map((relatedCourse) => (
                  <div key={relatedCourse.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0">
                        <img 
                          src={relatedCourse.image} 
                          alt={relatedCourse.title} 
                          className="h-48 w-full md:w-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{relatedCourse.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{relatedCourse.description}</p>
                        <Link 
                          to={`/courses/${relatedCourse.id}`}
                          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                        >
                          View Course Details
                          <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8 text-primary-100">Enroll in {course.title} today and take the first step toward your new career.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                Apply Now
              </Link>
              <Link to="/courses" className="btn bg-transparent border-2 border-white hover:bg-white/10">
                Explore More Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CourseDetailPage;