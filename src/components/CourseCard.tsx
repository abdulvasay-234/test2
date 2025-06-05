import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, BookOpen, Download } from 'lucide-react';
import { CourseType } from '../types/courseTypes';

interface CourseCardProps {
  course: CourseType;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.category}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
        
        <div className="mb-4 flex-grow">
          <p className="text-gray-600">{course.description}</p>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 text-primary-500" />
            <span>{course.duration}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2 text-primary-500" />
            <span>{course.students} students enrolled</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <BookOpen className="h-5 w-5 mr-2 text-primary-500" />
            <span>{course.modules} modules</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <Link
            to={`/courses/${course.id}`}
            className="btn btn-primary text-center"
          >
            View Details
          </Link>
          
          <a
            href={course.syllabusUrl}
            download
            className="btn btn-outline flex items-center justify-center"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Syllabus
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;