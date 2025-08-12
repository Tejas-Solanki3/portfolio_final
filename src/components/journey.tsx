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

const JourneyItem = ({ item, index }: { item: (typeof journeyItems)[0], index: number }) => {
    const Icon = icons[item.icon as keyof typeof icons] || Code;
    const isOdd = index % 2 !== 0;

    const cardVariants = {
        hidden: { opacity: 0, x: isOdd ? 100 : -100 },
        visible: { opacity: 1, x: 0 },
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { delay: 0.3 } },
    };

    return (
        <div className="flex justify-center relative">
            <div className={`w-1/2 flex ${isOdd ? 'justify-start' : 'justify-end'}`}>
                 <div className={`w-px bg-border absolute h-full top-0 ${isOdd ? 'left-1/2 -ml-[0.5px]' : 'right-1/2 -mr-[0.5px]'}`}></div>
            </div>
            <motion.div
                className="w-1/2"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <Card className={`relative sketch-border ${isOdd ? 'ml-8' : 'mr-8'}`}>
                    <CardContent className="p-6 text-center">
                        <p className="text-sm text-accent font-semibold mb-1 font-headline">{item.year}</p>
                        <h3 className="font-bold text-primary font-headline">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </CardContent>
                </Card>
            </motion.div>
             <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-dashed border-border"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
             >
                <div className="bg-accent/20 p-3 rounded-full sketch-border">
                    <Icon className="h-6 w-6 text-accent" />
                </div>
            </motion.div>
        </div>
    );
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
        <div className="relative flex flex-col gap-12">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] bg-border bg-repeat-y" style={{backgroundImage: "linear-gradient(to bottom, hsl(var(--border)) 50%, transparent 50%)", backgroundSize: "2px 10px"}}></div>

          {journeyItems.map((item, index) => (
            <JourneyItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
