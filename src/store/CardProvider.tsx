import React, { createContext, useContext, useState } from 'react';

export type Card = {
  uuid?: string;
  title: string;
  imageLink: string;
  side: "left" | "right";
}

export type CardContextType = {
  cards: Card[];
  updateCards: (cards: Card[]) => void;
  removeCard: (card: Card) => void;
  addCard: (card: Card) => void;
  redistributeCardsAfterElimination: (cards: Card[]) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = (card: Card) => {
    setCards([...cards, card]);
  };

  const updateCards = (newCards: Card[]) => {
    setCards(newCards);
  };

  const redistributeCardsAfterElimination = (oldCards: Card[]) => {
    const newCards = oldCards.map((card, index) => {
      return { ...card, side: (index % 2 === 0) ? "left" : "right" } as Card;
    });
    setCards([...newCards]);
  }

  const removeCard = (card: Card) => {
    setCards(cards.filter((c) => c.uuid !== card.uuid));
  };

  return (
    <CardContext.Provider value={{ cards, updateCards, removeCard, addCard, redistributeCardsAfterElimination }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CardContext);

  if (context === undefined) {
    throw new Error("useCard must be used within a CardProvider");
  }

  return context;
};

