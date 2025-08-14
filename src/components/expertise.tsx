'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { expertise } from '@/lib/data';
import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

const gridAreas = [
  "md:col-span-6 xl:col-span-4",
  "md:col-span-6 xl:col-span-4",
  "md:col-span-6 xl:col-span-4",
  "md:col-span-6 xl:col-span-4",
  "md:col-span-6 xl:col-span-4",
  "md:col-span-6 xl:col-span-4",
];


interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
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
        <ul className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {expertise.map((area, index) => (
                <GridItem 
                    key={area.category}
                    area={gridAreas[index % gridAreas.length]}
                    icon={<area.icon className="h-4 w-4" />}
                    title={area.category}
                    description={area.description}
                />
            ))}
        </ul>
      </div>
    </motion.section>
  );
}
