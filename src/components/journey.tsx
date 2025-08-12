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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {journeyItems.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] || Code;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full sketch-border p-4 hover:shadow-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-start gap-6 p-2">
                    <div className="p-3 bg-accent/10 rounded-full border-2 border-dashed border-accent/20">
                        <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className='flex-1'>
                      <p className="text-sm text-accent font-semibold mb-1 font-headline">{item.year}</p>
                      <h3 className="font-bold text-primary text-lg font-headline">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
