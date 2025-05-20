import React from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { FlipResult } from '../types';

interface HistoryProps {
  history: FlipResult[];
  onClear: () => void;
}

export function History({ history, onClear }: HistoryProps) {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" />
          History
        </h2>
        <button
          onClick={onClear}
          className="text-red-500 hover:text-red-700 transition-colors duration-200"
          title="Clear History"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-2">
        {history.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-2 bg-gray-50 rounded"
          >
            <span className="capitalize">
              {item.type}: <strong>{item.result}</strong>
            </span>
            <span className="text-sm text-gray-500">
              {new Date(item.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
        {history.length === 0 && (
          <p className="text-center text-gray-500">No history yet</p>
        )}
      </div>
    </div>
  );
}