import { Code, Bot, Database, Server, AppWindow, Cable } from "lucide-react";
import Image from "next/image";
import React from "react";

export const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects. Built with Next.js, Tailwind CSS, and Framer Motion.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Web Development'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'website portfolio',
    link: 'https://github.com',
    category: 'web development',
  },
  {
    title: '3D Animation Short',
    description: 'A short animated film created using Blender, showcasing storytelling and 3D modeling skills.',
    tags: ['Blender', '3D Modeling', 'Animation'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: '3d animation',
    link: 'https://github.com',
    category: 'animation',
  },
  {
    title: 'Event Discovery App',
    description: 'A mobile app for discovering local events, built with React Native, featuring real-time updates and user profiles.',
    tags: ['React Native', 'Firebase', 'Mobile App'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'mobile app',
    link: 'https://github.com',
    category: 'app',
  },
    {
    title: 'E-commerce Platform',
    description: 'Developed a full-stack e-commerce platform with features like product listing, cart, and checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Web Development'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'ecommerce website',
    link: 'https://github.com',
    category: 'web development',
  },
];

export const galleryItems = [
    {
        title: 'Abstract Motion',
        description: 'An exploration of fluid dynamics in motion graphics.',
        imageUrl: 'https://placehold.co/600x400.png',
        imageAiHint: 'abstract art',
        link: 'https://example.com'
    },
    {
        title: 'Character Sketch',
        description: 'Concept art for a video game protagonist.',
        imageUrl: 'https://placehold.co/600x400.png',
        imageAiHint: 'character sketch',
        link: 'https://example.com'
    },
    {
        title: 'Logo Animation',
        description: 'Bringing a brand\'s logo to life with an engaging animation.',
        imageUrl: 'https://placehold.co/600x400.png',
        imageAiHint: 'logo animation',
        downloadUrl: '/downloads/logo-animation.mp4'
    },
    {
        title: 'Architectural Visualization',
        description: 'A realistic render of a modern home concept.',
        imageUrl: 'https://placehold.co/600x400.png',
        imageAiHint: 'modern architecture',
        downloadUrl: '/downloads/arch-viz.png'
    },
    {
        title: 'Synthwave Sunset',
        description: 'A retro-futuristic landscape scene.',
        imageUrl: 'https://placehold.co/600x400.png',
        imageAiHint: 'synthwave sunset',
        link: 'https://example.com'
    },
    {
        title: 'Product Mockup',
        description: 'A sleek mockup for a new tech gadget.',
        imageUrl: 'https://placehold.co/600x400.png',
        imageAiHint: 'product mockup',
        downloadUrl: '/downloads/product-mockup.png'
    }
];

export const journeyItems = [
    {
        title: '2023',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Started B.Tech</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
              Began my journey in Computer Engineering, diving deep into the fundamentals of programming and computer science.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/600x400.png"
                alt="University campus"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="university campus"
              />
              <Image
                src="https://placehold.co/600x400.png"
                alt="Students in a lab"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="science lab"
              />
            </div>
          </div>
        ),
    },
     {
        title: 'Late 2023',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">First Web Project</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
              Built my first static website using HTML, CSS, and JavaScript. It sparked my passion for web development and design.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Code on a screen"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="code editor"
              />
               <Image
                src="https://placehold.co/600x400.png"
                alt="Simple website screenshot"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="simple website"
              />
            </div>
          </div>
        ),
    },
    {
        title: '2024',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Joined Developer Club</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
             Became a member of the university's developer club, learning about app development and collaborating on projects with peers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Team working together"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="team collaboration"
              />
              <Image
                src="https://placehold.co/600x400.png"
                alt="React Native code"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="mobile app code"
              />
            </div>
          </div>
        ),
    },
     {
        title: 'Mid 2024',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Hackathon Winner</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
              Won 1st place in a university hackathon for an innovative community solution app, which was a huge confidence booster.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Trophy for winning"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="trophy award"
              />
               <Image
                src="https://placehold.co/600x400.png"
                alt="People celebrating"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="team celebration"
              />
            </div>
          </div>
        ),
    },
    {
        title: 'Present',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Exploring AI & Animation</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
              Currently diving into the world of Generative AI and 3D animation, combining my technical and creative skills to build new experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/600x400.png"
                alt="AI neural network"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="artificial intelligence"
              />
              <Image
                src="https://placehold.co/600x400.png"
                alt="Blender 3D model"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="3d modeling"
              />
            </div>
          </div>
        ),
    },
];

export const navLinks = [
  { name: 'About', hash: '#about' },
  { name: 'Expertise', hash: '#expertise' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Gallery', hash: '#gallery' },
  { name: 'Journey', hash: '#journey' },
  { name: 'Contact', hash: '#contact' },
];

export const expertise = [
  {
    category: 'Frontend',
    icon: Code,
    description: 'Crafting responsive and dynamic user interfaces with modern technologies.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: Server,
    description: 'Building robust and scalable server-side applications and APIs.',
    skills: ['Node.js', 'Express', 'Python', 'Flask'],
  },
  {
    category: 'Database',
    icon: Database,
    description: 'Managing and designing databases for efficient data storage and retrieval.',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'AI/ML',
    icon: Bot,
    description: 'Exploring the world of AI, building intelligent models and agents.',
    skills: ['Genkit', 'TensorFlow', 'scikit-learn'],
  },
  {
    category: 'App Dev',
    icon: AppWindow,
    description: 'Creating mobile applications for both Android and iOS platforms.',
    skills: ['React Native', 'Flutter', 'Swift'],
  },
  {
    category: 'Animation',
    icon: Cable,
    description: 'Bringing ideas to life through 3D modeling and motion design.',
    skills: ['Blender', 'Figma', 'After Effects'],
  },
];
