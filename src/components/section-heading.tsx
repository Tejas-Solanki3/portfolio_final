import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-bold text-center text-primary mb-12 capitalize font-headline ${className}`}>
      {children}
    </h2>
  );
}
