'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';
import { Typewriter } from './ui/typewriter-text';

const LandingPage = () => {
  return (
    <section id="home" className="w-full">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <Typewriter
            text={[
              'Tejas Solanki',
              'Building websites',
              'Crafting backend systems',
              'Exploring AI & ML',
            ]}
            loop={true}
            className="bg-gradient-to-br from-yellow-300 to-yellow-500 py-4 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent md:text-7xl min-h-[168px] md:min-h-[224px]"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">
                Get in Touch <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
};

export default LandingPage;
