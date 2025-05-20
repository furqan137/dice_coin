export interface FlipResult {
  id: string;
  type: 'coin' | 'dice';
  result: string;
  timestamp: string;
}

export interface GameState {
  history: FlipResult[];
  isAnimating: boolean;
  theme: 'classic' | 'gold' | 'neon';
  diceStyle: 'classic' | '3d' | 'pixel';
}