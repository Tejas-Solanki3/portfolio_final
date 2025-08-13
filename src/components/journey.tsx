'use client';

import React from 'react';
import { journeyItems } from '@/lib/data';
import { motion } from 'framer-motion';
import { Timeline } from './ui/timeline';

export default function Journey() {
  return (
    <motion.section 
      id="journey" 
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
        <Timeline data={journeyItems} />
    </motion.section>
  );
}
