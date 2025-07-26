'use client';
import { useState } from 'react';

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle Menu</button>
      {open && <div className="dropdown">User Menu</div>}
    </div>
  );
}
