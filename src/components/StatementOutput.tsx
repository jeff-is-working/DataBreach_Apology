import { useState } from 'react';
import { motion } from 'framer-motion';
import type { GeneratedStatement } from '../types';

interface StatementOutputProps {
  statement: GeneratedStatement | null;
}

// Check if Web Share API is available
const canShare = typeof navigator !== 'undefined' && 'share' in navigator;

export function StatementOutput({ statement }: StatementOutputProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  if (!statement) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-8 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          Your generated apology statement will appear here.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
          Configure parameters above or hit YOLO for a random scenario.
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

  const handleShare = async () => {
    if (!canShare) return;

    const shareText = statement.text.length > 280
      ? statement.text.slice(0, 277) + '...'
      : statement.text;

    const shareData = {
      title: 'Data Breach Apology Generator',
      text: `Check out this breach apology:\n\n${shareText}`,
      url: 'https://oopsallbreaches.com'
    };

    try {
      await navigator.share(shareData);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } catch (err) {
      // User cancelled or share failed - ignore AbortError
      if (err instanceof Error && err.name !== 'AbortError') {
        console.error('Share failed:', err);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {/* Metadata Bar */}
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between bg-gray-100 dark:bg-gray-800 p-2 sm:p-3 rounded-lg">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
        <div className="flex gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 sm:flex-none px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs sm:text-sm rounded transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 sm:flex-none px-2 sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs sm:text-sm rounded transition-colors"
          >
            Download
          </button>
          {canShare && (
            <button
              type="button"
              onClick={handleShare}
              className="flex-1 sm:flex-none px-2 sm:px-3 py-1 bg-corporate-blue hover:bg-blue-700 text-white text-xs sm:text-sm rounded transition-colors"
            >
              {shared ? 'Shared!' : 'Share'}
            </button>
          )}
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
      <details className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
        <summary className="cursor-pointer font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-corporate-blue dark:hover:text-blue-400">
          View Generation Parameters
        </summary>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <div><strong>Company:</strong> {statement.parameters.companyName}</div>
          <div><strong>Breach Type:</strong> {statement.parameters.breachType}</div>
          <div><strong>Industry:</strong> {statement.parameters.industry}</div>
          <div><strong>Records:</strong> {statement.parameters.affectedRecords}</div>
          <div><strong>Discovery:</strong> {statement.parameters.discoveryDelay}</div>
          <div><strong>Tone:</strong> {statement.parameters.tone}</div>
          <div className="sm:col-span-2">
            <strong>Data Types:</strong> {statement.parameters.dataTypes.join(', ')}
          </div>
        </div>
      </details>
    </motion.div>
  );
}
