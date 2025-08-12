'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { journeyItems } from '@/lib/data';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { Book, Code, Award, Users } from 'lucide-react';

const icons = {
  university: Book,
  code: Code,
  team: Users,
  hackathon: Award,
};

export default function Journey() {
  return (
    <motion.section 
      id="journey" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>My Journey</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {journeyItems.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] || Code;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center sketch-border hover:rotate-2 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 inline-block rounded-full bg-accent/20 p-4 sketch-border">
                        <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-sm text-accent font-semibold mb-1 font-headline">{item.year}</p>
                    <h3 className="font-bold text-primary font-headline">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  );
}
