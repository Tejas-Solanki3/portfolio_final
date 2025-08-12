'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,81,255,0.3),rgba(255,255,255,0))]">
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
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg">
            <Link href="#contact">
              Get in Touch <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
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
