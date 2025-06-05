import { CourseType } from '../types/courseTypes';

export const coursesData: CourseType[] = [
  {
    id: 'java-fullstack',
    title: 'Full Stack Java with Gen AI',
    description: 'Master full stack development with Java, Spring Boot, React, and incorporate GenAI to build intelligent applications.',
    duration: '16 weeks (480 hours)',
    students: 850,
    modules: 12,
    category: 'Development',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    syllabusUrl: '/syllabi/java-fullstack-syllabus.pdf',
    benefits: [
      'Build end-to-end applications from scratch',
      'Implement GenAI features in Java applications',
      'Master modern front-end frameworks like React',
      'Learn industry best practices for deployment and CI/CD',
      'Create portfolio-worthy projects for job interviews',
      'Access to exclusive job placement assistance',
      'One-on-one mentoring with industry professionals'
    ],
    curriculum: [
      {
        title: 'Module 1: Java Fundamentals',
        topics: [
          'Core Java concepts and syntax',
          'Object-oriented programming principles',
          'Collections Framework',
          'Exception handling',
          'Multithreading and concurrency'
        ]
      },
      {
        title: 'Module 2: Back-end Development',
        topics: [
          'Spring Framework fundamentals',
          'Spring Boot applications',
          'RESTful API design and development',
          'Database integration with Spring Data JPA',
          'Hibernate ORM'
        ]
      },
      {
        title: 'Module 3: Front-end Development',
        topics: [
          'HTML5, CSS3, and JavaScript fundamentals',
          'React.js and Redux',
          'TypeScript integration',
          'Building responsive UIs',
          'State management and hooks'
        ]
      },
      {
        title: 'Module 4: GenAI Integration',
        topics: [
          'Introduction to AI/ML concepts',
          'Working with LLMs in Java applications',
          'Implementing smart features with GenAI',
          'Building AI-enhanced user experiences',
          'Ethical considerations in AI development'
        ]
      }
    ],
    prerequisites: [
      'Basic programming knowledge',
      'Understanding of web technologies',
      'Logical thinking and problem-solving skills'
    ],
    tools: [
      'IntelliJ IDEA',
      'Git & GitHub',
      'Maven/Gradle',
      'Docker',
      'PostgreSQL',
      'MongoDB'
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science with Gen AI',
    description: 'Learn how to analyze data, build machine learning models, and leverage generative AI to extract insights and create intelligent solutions.',
    duration: '20 weeks (600 hours)',
    students: 650,
    modules: 15,
    category: 'Data Science',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    syllabusUrl: '/syllabi/data-science-syllabus.pdf',
    benefits: [
      'Master data analysis techniques using Python',
      'Build and deploy machine learning models',
      'Integrate generative AI capabilities into data pipelines',
      'Develop expertise in data visualization and storytelling',
      'Work on real-world industry projects',
      'Prepare for data science certification exams',
      'Network with industry professionals'
    ],
    curriculum: [
      {
        title: 'Module 1: Foundations of Data Science',
        topics: [
          'Python for data science',
          'Data structures and algorithms',
          'Statistics and probability',
          'Data cleaning and preprocessing',
          'Exploratory data analysis'
        ]
      },
      {
        title: 'Module 2: Machine Learning',
        topics: [
          'Supervised and unsupervised learning',
          'Regression and classification algorithms',
          'Model evaluation and validation',
          'Feature engineering and selection',
          'Ensemble methods'
        ]
      },
      {
        title: 'Module 3: Deep Learning',
        topics: [
          'Neural networks fundamentals',
          'Convolutional neural networks',
          'Recurrent neural networks',
          'Transfer learning',
          'Deep learning frameworks (TensorFlow, PyTorch)'
        ]
      },
      {
        title: 'Module 4: Generative AI',
        topics: [
          'Introduction to generative models',
          'Working with large language models',
          'Image generation and manipulation',
          'Text-to-image models',
          'Prompt engineering and optimization'
        ]
      },
      {
        title: 'Module 5: Industry Applications',
        topics: [
          'Natural language processing projects',
          'Computer vision applications',
          'Time series analysis and forecasting',
          'Recommender systems',
          'Capstone project'
        ]
      }
    ],
    prerequisites: [
      'Basic programming knowledge (preferably Python)',
      'Understanding of basic mathematics and statistics',
      'Analytical mindset',
      'Problem-solving skills'
    ],
    tools: [
      'Python with data science libraries',
      'Jupyter Notebooks',
      'SQL and NoSQL databases',
      'TensorFlow and PyTorch',
      'Git & GitHub',
      'Docker',
      'Cloud platforms (AWS, GCP, or Azure)'
    ]
  }
];