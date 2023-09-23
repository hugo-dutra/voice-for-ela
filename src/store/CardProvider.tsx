import React, { createContext, useContext, useState } from 'react';

export type Card = {
  uuid?: string;
  title: string;
  imageLink: string;
  side: "left" | "right";
}

export type CardContextType = {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  removeCard: (card: Card) => void;
  addCard: (card: Card) => void;
  selectLeftCards: () => Card[];
  selectRightCards: () => Card[];
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = (card: Card) => {
    setCards([...cards, card]);
  };

  const selectLeftCards = () => cards.filter((card) => card.side === "left");
  const selectRightCards = () => cards.filter((card) => card.side === "right");

  const removeCard = (card: Card) => {
    setCards(cards.filter((c) => c.title !== card.title));
  };

  return (
    <CardContext.Provider value={{ cards, setCards, removeCard, addCard, selectLeftCards, selectRightCards }}>
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

