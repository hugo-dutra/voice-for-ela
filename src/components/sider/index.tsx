import { FC } from "react";
import { SiderProps } from "./types";
import ImageCard from "../card";
import { Typography } from "@mui/material";
import { SiderContainer } from "./style";
import { useCard } from "../../store/CardProvider";

export const Sider: FC<SiderProps> = (props) => {

  const context = useCard();

  

  const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <Typography variant="h6" component="div" gutterBottom>
        {props.title}
      </Typography>
      <SiderContainer>
        {cardList.map((card) => (
          <ImageCard buttonAction={() => alert('alert here: ' + card)} title={card + "º"} />
        ))}
      </SiderContainer>
    </>
  )
}

export default Sider;
