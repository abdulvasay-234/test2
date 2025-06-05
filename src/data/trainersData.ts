import { TrainerType } from '../types/courseTypes';

export const trainersData: TrainerType[] = [
  {
    id: 'dr-sophia-chen',
    name: 'Dr. Sophia Chen',
    role: 'Lead Java Instructor',
    bio: 'Dr. Chen brings over 15 years of experience in enterprise Java development and architecture. She has led teams at major tech companies and contributed to several open-source projects. Her teaching methodology combines theoretical foundations with hands-on industry practices.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300',
    expertise: [
      'Java Enterprise Architecture',
      'Spring Framework',
      'Microservices',
      'Cloud Native Applications',
      'DevOps Practices'
    ],
    courses: ['java-fullstack'],
    experience: '15+ years in enterprise software development at companies including Oracle and IBM',
    education: 'Ph.D. in Computer Science, Stanford University',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sophiachen',
      twitter: 'https://twitter.com/drsophiachen',
      github: 'https://github.com/sophiachen'
    }
  },
  {
    id: 'alex-rodriguez',
    name: 'Alex Rodriguez',
    role: 'Frontend Development Specialist',
    bio: 'Alex specializes in modern frontend technologies with a focus on React and the JavaScript ecosystem. Previously a senior engineer at Facebook, Alex has deep expertise in building scalable, performant user interfaces and mentoring junior developers.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    expertise: [
      'React & Redux',
      'JavaScript/TypeScript',
      'Frontend Architecture',
      'Responsive Design',
      'Web Performance Optimization'
    ],
    courses: ['java-fullstack'],
    experience: '10+ years in frontend development at companies including Facebook and Airbnb',
    education: 'M.S. in Computer Science, MIT',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alexrodriguez',
      github: 'https://github.com/alexrod'
    }
  },
  {
    id: 'dr-michael-patel',
    name: 'Dr. Michael Patel',
    role: 'Data Science Lead',
    bio: 'Dr. Patel is a renowned data scientist who has published numerous papers on machine learning and artificial intelligence. He previously led the AI research team at Google and has consulted for numerous Fortune 500 companies on implementing data-driven strategies.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    expertise: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Statistical Analysis',
      'Big Data Technologies',
      'Generative AI'
    ],
    courses: ['data-science'],
    experience: '12+ years in AI research and data science at Google and NVIDIA',
    education: 'Ph.D. in Machine Learning, UC Berkeley',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michaelpatel',
      twitter: 'https://twitter.com/drmichaelpatel',
      github: 'https://github.com/michaelpatel'
    }
  },
  {
    id: 'jessica-kim',
    name: 'Jessica Kim',
    role: 'AI & MLOps Specialist',
    bio: 'Jessica specializes in the operational aspects of machine learning and AI. Her expertise lies in building robust data pipelines, MLOps, and deploying models to production. She has trained teams at Amazon and Netflix on best practices for AI implementation.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    expertise: [
      'MLOps',
      'Machine Learning Engineering',
      'Data Engineering',
      'Cloud Infrastructure for AI',
      'AI Ethics and Governance'
    ],
    courses: ['data-science'],
    experience: '8+ years in MLOps and AI engineering at Amazon and Netflix',
    education: 'M.S. in Data Science, Harvard University',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/jessicakim',
      github: 'https://github.com/jessicakim'
    }
  },
  {
    id: 'david-williams',
    name: 'David Williams',
    role: 'GenAI Applications Expert',
    bio: 'David is a pioneer in generative AI applications, having worked on some of the earliest commercial applications of large language models. He bridges the gap between cutting-edge AI research and practical business applications.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
    expertise: [
      'Generative AI',
      'Large Language Models',
      'Prompt Engineering',
      'AI Product Development',
      'Computer Vision'
    ],
    courses: ['java-fullstack', 'data-science'],
    experience: '7+ years working with generative AI at OpenAI and Anthropic',
    education: 'M.S. in Artificial Intelligence, Carnegie Mellon University',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidwilliams',
      twitter: 'https://twitter.com/davidwilliamsai'
    }
  }
];