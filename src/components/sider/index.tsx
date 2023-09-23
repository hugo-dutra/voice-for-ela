import { FC, useEffect, useState } from "react";
import { SiderProps } from "./types";
import ImageCard from "../card";
import { Typography } from "@mui/material";
import { SiderContainer } from "./style";
import { Card, useCard } from "../../store/CardProvider";
import { CardImageProps } from "../card/types";
import useLocalStorage from "../../hooks/useLocalStorage";

export const Sider: FC<SiderProps> = (props) => {

  const context = useCard();
  const { cards, updateCards } = context || { cards: [] };
  const [storageValue, setStorageValue] = useLocalStorage<Card[]>("cards", []);

  const [cardList, setCardList] = useState<Card[]>([]);

  useEffect(() => {
    setCardList([...cards]);

  }, [cards]);

  useEffect(() => {
    setCardList([...storageValue]);
    updateCards([...storageValue]);
  }, []);

  return (
    <>
      <Typography variant="h6" component="div" gutterBottom>
        {props.title}
      </Typography>
      <SiderContainer>
        {cardList.filter(card => card.side == props.siderSide).map((card, idx) => (
          <ImageCard uuid={card.uuid} key={`card-idx-${idx}`} buttonAction={() => alert('Remove imagem in future')} title={card.title} imageProps={
            {
              src: card.imageLink,
              alt: card.title,
            } as CardImageProps
          } />
        ))}
      </SiderContainer>
    </>
  )
}

export default Sider;
