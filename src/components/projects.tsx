'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { projects } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Projects() {
    const [activeTab, setActiveTab] = useState('all');

    const filteredProjects = activeTab === 'all' 
        ? projects 
        : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>My Projects</SectionHeading>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col items-center mb-12">
          <TabsList>
            {categories.map(category => (
                <TabsTrigger key={category} value={category} className="capitalize">{category}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
