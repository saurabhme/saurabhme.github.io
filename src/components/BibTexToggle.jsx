import React, { useState } from 'react';
import { FileText, Copy, Check } from 'lucide-react';

export default function BibTexToggle({ bibtex }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs font-mono font-bold text-[var(--color-primary)] dark:text-[var(--color-primary-dark)] hover:underline flex items-center gap-1"
      >
        {isOpen ? '[-]' : '[+]'} BibTeX
      </button>

      {isOpen && (
        <div className="mt-2 relative group">
          <pre className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-xs overflow-x-auto font-mono text-[var(--color-text)] dark:text-[var(--color-text-dark)] border border-[var(--color-border)] dark:border-[var(--color-border-dark)]">
            {bibtex}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 bg-white dark:bg-slate-700 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity border border-gray-200 dark:border-gray-600"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3 text-gray-500 dark:text-gray-400" />}
          </button>
        </div>
      )}
    </div>
  );
}
