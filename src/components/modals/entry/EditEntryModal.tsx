'use client';

import { useState } from 'react';

export default function EditEntryModal({
  initialContent,
  onSave,
  onClose,
}: {
  initialContent: string;
  onSave: (text: string) => void;
  onClose: () => void;
}) {
  const [text, setText] = useState(initialContent);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h3 className="mb-2 font-semibold text-lg">Edit Entry</h3>
        <textarea
          className="w-full border p-2 mb-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">Cancel</button>
          <button onClick={() => onSave(text)} className="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
