import React from 'react';
import { Dice6 } from 'lucide-react';

interface DiceRollerProps {
  isAnimating: boolean;
  style: string;
  onRoll: () => void;
  result?: string;
}

export function DiceRoller({ isAnimating, style, onRoll, result }: DiceRollerProps) {
  const getStyleClasses = () => {
    switch (style) {
      case '3d':
        return 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg';
      case 'pixel':
        return 'bg-green-500 border-2 border-green-700 shadow-inner';
      default:
        return 'bg-white border-2 border-gray-300';
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className={`relative w-32 h-32 rounded-lg ${getStyleClasses()} 
          flex items-center justify-center cursor-pointer transform 
          ${isAnimating ? 'animate-roll' : ''} 
          hover:scale-105 transition-transform duration-200`}
        onClick={() => !isAnimating && onRoll()}
      >
        {result ? (
          <span className="text-4xl font-bold">{result}</span>
        ) : (
          <Dice6 className="w-16 h-16" />
        )}
      </div>
      <button
        onClick={() => !isAnimating && onRoll()}
        disabled={isAnimating}
        className="px-6 py-2 bg-green-600 text-white rounded-lg 
          hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200"
      >
        Roll Dice
      </button>
    </div>
  );
}