'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { galleryItems } from '@/lib/data';
import { Card } from './ui/card';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Download, ExternalLink, Eye } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <motion.section 
      id="gallery" 
      className="py-24 bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Gallery</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <Dialog key={index} onOpenChange={(open) => !open && setSelectedItem(null)}>
              <DialogTrigger asChild>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card
                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full aspect-square transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.imageAiHint}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white p-4">
                        <Eye className="h-8 w-8 mx-auto mb-2" />
                        <h3 className="font-bold">{item.title}</h3>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                {selectedItem && (
                  <>
                    <DialogHeader>
                      <DialogTitle>{selectedItem.title}</DialogTitle>
                      <DialogDescription>{selectedItem.description}</DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-video mt-4">
                        <Image src={selectedItem.imageUrl} alt={selectedItem.title} fill className="object-contain rounded-md" data-ai-hint={selectedItem.imageAiHint} />
                    </div>
                    <div className="flex gap-4 mt-4 justify-end">
                      {selectedItem.downloadUrl && (
                        <Button asChild>
                          <a href={selectedItem.downloadUrl} download>
                            Download <Download className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {selectedItem.link && (
                        <Button asChild variant="outline">
                          <Link href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                            View Online <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
