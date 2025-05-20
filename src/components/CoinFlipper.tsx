import React from 'react';
import { Coins } from 'lucide-react';

interface CoinFlipperProps {
  isAnimating: boolean;
  theme: string;
  onFlip: () => void;
  result?: string;
}

export function CoinFlipper({ isAnimating, theme, onFlip, result }: CoinFlipperProps) {
  const getThemeClasses = () => {
    switch (theme) {
      case 'gold':
        return 'bg-yellow-400 shadow-yellow-200';
      case 'neon':
        return 'bg-purple-500 shadow-purple-200';
      default:
        return 'bg-gray-300 shadow-gray-200';
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className={`relative w-32 h-32 rounded-full ${getThemeClasses()} 
          flex items-center justify-center cursor-pointer transform 
          ${isAnimating ? 'animate-flip' : ''} 
          hover:scale-105 transition-transform duration-200`}
        onClick={() => !isAnimating && onFlip()}
      >
        {result ? (
          <span className="text-2xl font-bold">{result}</span>
        ) : (
          <Coins className="w-16 h-16 text-white" />
        )}
      </div>
      <button
        onClick={() => !isAnimating && onFlip()}
        disabled={isAnimating}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg 
          hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200"
      >
        Flip Coin
      </button>
    </div>
  );
}