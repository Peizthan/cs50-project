import React from 'react';
export function InfoPanel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-cream-300 bg-cream-50 p-5 md:p-6 shadow-sm">{children}</div>;
}
