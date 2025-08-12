'use client';

import React, { useState, useTransition } from 'react';
import { generateAboutMe } from '@/ai/flows/generate-about-me';
import { projects } from '@/lib/data';
import SectionHeading from './section-heading';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projectDescriptions = projects.map((p) => p.description);

export default function AboutMe() {
  const [keywords, setKeywords] = useState('innovative, team player, leader');
  const [generatedBio, setGeneratedBio] = useState(
    "I'm a passionate and driven second-year B.Tech student based in Mumbai, with a strong foundation in both creative design and technical development. My journey in technology is fueled by a desire to build things that are not only functional but also beautiful and intuitive. From developing full-stack web applications to crafting intricate 3D animations, I'm always eager to learn new skills and take on challenging projects."
  );
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleGenerateBio = async () => {
    startTransition(async () => {
      try {
        const keywordArray = keywords.split(',').map((k) => k.trim()).filter((k) => k);
        if (keywordArray.length === 0) {
          toast({
            title: 'No keywords provided',
            description: 'Please enter some keywords to generate a bio.',
            variant: 'destructive',
          });
          return;
        }

        const result = await generateAboutMe({
          keywords: keywordArray,
          projectDescriptions,
        });
        setGeneratedBio(result.aboutMe);
        toast({
          title: 'Bio Generated!',
          description: 'Your new AI-powered bio is ready.',
        });
      } catch (error) {
        console.error('Failed to generate bio:', error);
        toast({
          title: 'Error',
          description: 'Failed to generate a new bio. Please try again.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <motion.section 
      id="about" 
      className="py-24 bg-secondary relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
        <div className="absolute -top-10 -right-10 opacity-20">
            <svg width="250" height="250" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,0 A100,100 0 0,1 100,200" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" strokeDasharray="5,10"/>
                <path d="M100,20 A80,80 0 0,1 100,180" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" strokeDasharray="5,5"/>
            </svg>
        </div>
        <div className="absolute -bottom-12 -left-12 opacity-20">
             <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 L190 190" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0.1, 10" />
                <path d="M190 10 L10 190" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="0.1, 10" />
             </svg>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading>About Me</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="w-full max-w-md mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://placehold.co/600x600.png"
              alt="Astra Sharma"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl object-cover aspect-square"
              data-ai-hint="portrait person"
            />
          </motion.div>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground whitespace-pre-line">{generatedBio}</p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                <Sparkles className="text-accent h-5 w-5" />
                Generate a New Bio
              </h3>
              <p className="text-sm text-muted-foreground">
                Enter some keywords that describe you (comma-separated) and let AI craft a new introduction.
              </p>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="e.g., creative, problem-solver"
                  disabled={isPending}
                />
                <Button onClick={handleGenerateBio} disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                  <span className="sr-only">Generate</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
