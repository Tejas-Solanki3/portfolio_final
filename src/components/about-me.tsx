'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import spidermanImage from './tejas.png';

export default function AboutMe() {
  const generatedBio = "I’m a passionate and curious developer, currently exploring the MERN stack and building impactful projects that solve real-world problems. I enjoy taking ideas from concept to execution — whether it’s designing smooth user experiences, integrating backend logic, or experimenting with emerging technologies";

  return (
    <motion.section
      id="about"
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading>About Me</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="w-full max-w-md mx-auto aspect-square relative"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/10 dark:bg-slate-900/80 rounded-2xl shadow-lg p-4 h-full w-full backdrop-blur-sm border border-white/20">
              <Image
                src={spidermanImage}
                alt="Spiderman illustration"
                fill
                className="object-contain rounded-lg"
                placeholder="blur"
              />
            </div>
          </motion.div>
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6">
                <p className="text-muted-foreground whitespace-pre-line">{generatedBio}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
