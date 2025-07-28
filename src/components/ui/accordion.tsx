'use client';

import * as React from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border rounded mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 bg-gray-100 font-medium"
      >
        {title}
      </button>
      {open && <div className="p-4">{children}</div>}
    </div>
  );
}
