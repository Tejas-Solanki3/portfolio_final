import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className="flex justify-center mb-12">
        <h2 className={`text-3xl font-bold text-center text-primary capitalize font-headline sketch-border inline-block ${className}`}>
            {children}
        </h2>
    </div>
  );
}
