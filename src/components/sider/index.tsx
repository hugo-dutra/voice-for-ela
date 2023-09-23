import { FC } from "react";
import { SiderProps } from "./types";
import ImageCard from "../card";
import { Typography } from "@mui/material";
import { SiderContainer } from "./style";
import { useCard } from "../../store/CardProvider";
import { CardImageProps } from "../card/types";

export const Sider: FC<SiderProps> = (props) => {

  const context = useCard();
  const { cards } = context || { cards: [] };


  const cardList = [...cards];
  return (
    <>
      <Typography variant="h6" component="div" gutterBottom>
        {props.title}
      </Typography>
      <SiderContainer>
        {cardList.filter(card => card.side == props.siderSide).map((card, idx) => (
          <ImageCard key={`card-idx-${idx}`} buttonAction={() => alert('Remove imagem in future')} title={card.title} imageProps={
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
