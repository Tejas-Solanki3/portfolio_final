import { Code, Bot, Database, Server, AppWindow, Palette } from "lucide-react";
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

export const journeyItems = [
    {
        title: '2024',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Started B.Tech</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
              Began my journey in Computer Engineering, diving deep into the fundamentals of programming and computer science.
            </p>
            <Image
              src="https://placehold.co/600x400.png"
              alt="University campus"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full w-full shadow-md"
              data-ai-hint="university campus"
            />
          </div>
        ),
    },
     {
        title: 'Dec 2024',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Won ITM Buildathon 3.0</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
              Achieved first place in my college’s flagship hackathon, a significant milestone early in my journey.
            </p>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Hackathon trophy"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full w-full shadow-md"
              data-ai-hint="hackathon trophy"
            />
          </div>
        ),
    },
    {
        title: 'Feb 2025',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Won IMAGINE Hackathon (PIWOT)</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
             Secured a victory in a prestigious national-level hackathon organized by the PanIIT Alumni India, competing against top talent.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Group of developers at a hackathon"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="hackathon event"
              />
              <Image
                src="https://placehold.co/600x400.png"
                alt="PanIIT logo"
                width={500}
                height={500}
                className="rounded-lg object-contain h-full w-full shadow-md"
                data-ai-hint="tech logo"
              />
            </div>
          </div>
        ),
    },
     {
        title: 'Project Journey',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Exploring Diverse Tech Domains</h4>
            <p className="text-muted-foreground text-sm font-normal mb-4">
              I explored multiple domains through impactful projects:
            </p>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2 mb-8">
                <li><b>EdTech:</b> Built SecureExam Lite, a browser-based proctoring tool using Flask, MediaPipe, and Computer Vision.</li>
                <li><b>Healthcare:</b> Developed MedRush, an emergency-care platform featuring a Dark Ambulance model and AI-driven symptom checks.</li>
                <li><b>FoodTech:</b> Created a Recipe AI with Hindi voice assistance for accessible cooking guidance.</li>
                <li><b>AgroTech:</b> Designed solutions for technology-driven sustainable farming.</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://placehold.co/600x400.png"
                alt="AI proctoring system UI"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="edtech learning"
              />
               <Image
                src="https://placehold.co/600x400.png"
                alt="Healthcare dashboard"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="healthcare technology"
              />
            </div>
          </div>
        ),
    },
    {
        title: 'Present',
        content: (
          <div>
            <h4 className="font-bold text-lg mb-2">Strengthening Core Skills</h4>
            <p className="text-muted-foreground text-sm font-normal mb-8">
             Currently focusing on MERN stack projects and building apps, while also exploring AI, automation, and computer vision to create intelligent and efficient solutions. I am continuously learning and building new experiences.
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
                alt="Code on a screen with multiple languages"
                width={500}
                height={500}
                className="rounded-lg object-cover h-full w-full shadow-md"
                data-ai-hint="code editor"
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
    category: 'Designing',
    icon: Palette,
    description: 'Creating visually appealing designs and user interfaces.',
    skills: ['Figma'],
  },
];
