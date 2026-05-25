import cards from './cards.json' with { type: 'json' };

export interface Card {
  id: number;
  quote: string;
  emoji?: string;
  imageUrl?: string;
}

export const getCard = (): Card =>
  cards[Math.floor(Math.random() * cards.length)];
