'use client';
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}
export function SectionHeader({ title, subtitle, align = 'left' }: SectionHeaderProps) {
  const base = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-2 ${base}`}>
      <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-wide uppercase text-olive-900">{title}</h2>
      {subtitle && <p className="text-base md:text-lg text-brown-700 max-w-prose">{subtitle}</p>}
      <span className="mt-1 h-0.5 w-16 bg-olive-700 rounded" />
    </div>
  );
}
