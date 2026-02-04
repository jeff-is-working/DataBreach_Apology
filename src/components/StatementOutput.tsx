import { useState } from 'react';
import { motion } from 'framer-motion';
import type { GeneratedStatement } from '../types';

interface StatementOutputProps {
  statement: GeneratedStatement | null;
}

export function StatementOutput({ statement }: StatementOutputProps) {
  const [copied, setCopied] = useState(false);

  if (!statement) {
    return (
      <div className="bg-gray-100 p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">
        <p className="text-gray-500">
          Your generated apology statement will appear here.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Configure parameters on the left or hit YOLO for a random scenario.
        </p>
      </div>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(statement.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([statement.text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `breach-apology-${statement.parameters.companyName.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Metadata Bar */}
      <div className="flex flex-wrap gap-2 items-center justify-between bg-gray-100 p-3 rounded-lg">
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-corporate-blue text-white text-xs rounded">
            Authenticity: {statement.authenticityScore}%
          </span>
          {statement.comboTriggered && (
            <span className="px-2 py-1 bg-yellow-500 text-gray-900 text-xs rounded font-semibold">
              {statement.comboTriggered}
            </span>
          )}
          {statement.isJackpot && (
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs rounded font-bold animate-pulse">
              JACKPOT!
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm rounded transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleDownload}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm rounded transition-colors"
          >
            Download
          </button>
        </div>
      </div>

      {/* Statement Display */}
      <div className="letterhead">
        <div className="letterhead-header">
          <h3 className="text-xl font-bold">{statement.parameters.companyName}</h3>
          <p className="text-sm text-gray-600">Security Notification</p>
        </div>
        <div className="letterhead-body whitespace-pre-wrap font-serif text-sm leading-relaxed">
          {statement.text}
        </div>
      </div>

      {/* Parameters Summary */}
      <details className="bg-gray-50 p-4 rounded-lg">
        <summary className="cursor-pointer font-semibold text-gray-700 hover:text-corporate-blue">
          View Generation Parameters
        </summary>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div><strong>Company:</strong> {statement.parameters.companyName}</div>
          <div><strong>Breach Type:</strong> {statement.parameters.breachType}</div>
          <div><strong>Industry:</strong> {statement.parameters.industry}</div>
          <div><strong>Records:</strong> {statement.parameters.affectedRecords}</div>
          <div><strong>Discovery:</strong> {statement.parameters.discoveryDelay}</div>
          <div><strong>Tone:</strong> {statement.parameters.tone}</div>
          <div className="col-span-2">
            <strong>Data Types:</strong> {statement.parameters.dataTypes.join(', ')}
          </div>
        </div>
      </details>
    </motion.div>
  );
}
