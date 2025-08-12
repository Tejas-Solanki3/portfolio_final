'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-side,rgba(120,81,255,0.15),rgba(255,255,255,0))]"></div>
        </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-primary font-headline tracking-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tejas Solanki
        </motion.h1>
        <motion.p 
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A creative 2nd year B.Tech student from Mumbai, passionate about building beautiful and functional digital experiences.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="sketch-border">
            <Link href="#contact">
              Get in Touch <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="sketch-border">
            <Link href="#projects">
              View My Work <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
        <motion.div 
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;
