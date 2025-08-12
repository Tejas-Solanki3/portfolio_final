import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className="flex justify-center mb-12">
        <h2 className={`text-3xl font-bold text-center text-primary capitalize font-headline border-b-2 border-accent pb-2 inline-block ${className}`}>
            {children}
        </h2>
    </div>
  );
}
