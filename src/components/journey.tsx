import React from 'react';
import SectionHeading from './section-heading';
import { journeyItems } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>My Journey</SectionHeading>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div key={index} className="relative flex items-center group">
                <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border"></div>
                <div className={`flex w-full items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:gap-8`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="w-full md:w-1/2 z-10">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 items-center">
                          <div className="relative h-32 sm:h-full w-full col-span-1">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                                data-ai-hint={item.imageAiHint}
                            />
                          </div>
                          <div className="p-4 col-span-2">
                            <p className="text-sm text-accent font-semibold mb-1">{item.year}</p>
                            <h3 className="font-bold text-primary">{item.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                          </div>
                      </div>
                    </Card>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-background"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
