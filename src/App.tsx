import React, { useState, useCallback } from 'react';
import { CoinFlipper } from './components/CoinFlipper';
import { DiceRoller } from './components/DiceRoller';
import { History } from './components/History';
import { Settings } from './components/Settings';
import type { GameState, FlipResult } from './types';

function App() {
  const [state, setState] = useState<GameState>({
    history: [],
    isAnimating: false,
    theme: 'classic',
    diceStyle: 'classic',
  });

  const [coinResult, setCoinResult] = useState<string>();
  const [diceResult, setDiceResult] = useState<string>();

  const addToHistory = (type: 'coin' | 'dice', result: string) => {
    const newResult: FlipResult = {
      id: crypto.randomUUID(),
      type,
      result,
      timestamp: new Date().toISOString(),
    };
    setState((prev) => ({
      ...prev,
      history: [newResult, ...prev.history].slice(0, 10),
    }));
  };

  const handleCoinFlip = useCallback(() => {
    setState((prev) => ({ ...prev, isAnimating: true }));
    setCoinResult(undefined);
    
    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setCoinResult(result);
      addToHistory('coin', result);
      setState((prev) => ({ ...prev, isAnimating: false }));
    }, 2000);
  }, []);

  const handleDiceRoll = useCallback(() => {
    setState((prev) => ({ ...prev, isAnimating: true }));
    setDiceResult(undefined);
    
    setTimeout(() => {
      const result = String(Math.floor(Math.random() * 6) + 1);
      setDiceResult(result);
      addToHistory('dice', result);
      setState((prev) => ({ ...prev, isAnimating: false }));
    }, 1000);
  }, []);

  const clearHistory = () => {
    setState((prev) => ({ ...prev, history: [] }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Virtual Coin Flip & Dice Roller
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-6">Coin Flipper</h2>
            <CoinFlipper
              isAnimating={state.isAnimating}
              theme={state.theme}
              onFlip={handleCoinFlip}
              result={coinResult}
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-6">Dice Roller</h2>
            <DiceRoller
              isAnimating={state.isAnimating}
              style={state.diceStyle}
              onRoll={handleDiceRoll}
              result={diceResult}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <History history={state.history} onClear={clearHistory} />
          <Settings
            theme={state.theme}
            diceStyle={state.diceStyle}
            onThemeChange={(theme) => setState((prev) => ({ ...prev, theme }))}
            onDiceStyleChange={(style) => setState((prev) => ({ ...prev, diceStyle: style }))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;