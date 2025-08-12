'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { expertise } from '@/lib/data';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    },
  }),
};

export default function Expertise() {
  return (
    <motion.section 
      id="expertise" 
      className="py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>My Expertise</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((area, index) => (
            <motion.div
              key={area.category}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Card className="h-full sketch-border flex flex-col hover:shadow-accent/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <area.icon className="h-8 w-8 text-accent transition-colors" />
                  </div>
                  <CardTitle className='font-headline text-2xl'>{area.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center gap-4 p-6 pt-0">
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {area.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="text-sm font-mono group-hover:bg-accent/20 transition-colors">{skill}</Badge>
                        ))}
                    </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
