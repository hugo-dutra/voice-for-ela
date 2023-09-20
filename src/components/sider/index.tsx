import React, { FC } from "react";
import { SiderProps } from "./types";
import ImageCard from "../card";
import { Typography } from "@mui/material";

export const Sider: FC<SiderProps> = (props) => {
  const handleButtonAction = () => {
    alert('teste button action')
  }

  return (
    <>

      <Typography variant="h6" component="div" gutterBottom>
        {props.title}
      </Typography>

      <ImageCard buttonAction={handleButtonAction} />
      <ImageCard buttonAction={handleButtonAction} />

    </>
  )
}
export default Sider;
