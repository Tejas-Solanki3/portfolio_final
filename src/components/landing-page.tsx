import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const LandingPage = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/20 opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-headline tracking-tight mb-4 animate-fade-in-down">
          Astra Sharma
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
          A creative 2nd year B.Tech student from Mumbai, passionate about building beautiful and functional digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
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
        </div>
        <div className="mt-8 flex justify-center gap-6 animate-fade-in">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
