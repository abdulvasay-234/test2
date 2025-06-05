import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
  course: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  testimonial,
  course
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
          ))}
        </div>
      </div>
      
      <blockquote className="italic text-gray-700 mb-4 flex-grow">
        "{testimonial}"
      </blockquote>
      
      <div className="text-sm text-gray-600 pt-4 border-t border-gray-100">
        <span className="font-medium">Course:</span> {course}
      </div>
    </div>
  );
};

export default TestimonialCard;