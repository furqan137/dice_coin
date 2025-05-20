import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

interface SettingsProps {
  theme: string;
  diceStyle: string;
  onThemeChange: (theme: string) => void;
  onDiceStyleChange: (style: string) => void;
}

export function Settings({
  theme,
  diceStyle,
  onThemeChange,
  onDiceStyleChange,
}: SettingsProps) {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
        <SettingsIcon className="w-5 h-5" />
        Customization
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Coin Theme
          </label>
          <div className="flex gap-2">
            {['classic', 'gold', 'neon'].map((t) => (
              <button
                key={t}
                onClick={() => onThemeChange(t)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  theme === t
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dice Style
          </label>
          <div className="flex gap-2">
            {['classic', '3d', 'pixel'].map((s) => (
              <button
                key={s}
                onClick={() => onDiceStyleChange(s)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  diceStyle === s
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}