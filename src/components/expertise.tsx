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
    },
  }),
};

export default function Expertise() {
  return (
    <motion.section 
      id="expertise" 
      className="py-24 bg-secondary"
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
              viewport={{ once: true }}
            >
              <Card className="h-full sketch-border flex flex-col hover:shadow-accent/20 hover:shadow-lg transition-shadow">
                <CardHeader className="flex-row items-center gap-4">
                  <area.icon className="h-8 w-8 text-accent" />
                  <CardTitle className='font-headline'>{area.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-wrap gap-2">
                  {area.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-sm font-mono">{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
