'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';

const LandingPage = () => {
  return (
    <section id="home" className="w-full">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Tejas Solanki
        </motion.h1>
         <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
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
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </motion.div>
      </LampContainer>
    </section>
  );
};

export default LandingPage;
