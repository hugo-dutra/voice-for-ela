import React, { FC, useState } from "react";
import { SiderProps } from "./types";
import ImageCard from "../card";
import { Typography } from "@mui/material";
import AddCardDialog from "../dialogs/AddCard";

export const Sider: FC<SiderProps> = (props) => {


  return (
    <>     
      <Typography variant="h6" component="div" gutterBottom>
        {props.title}
      </Typography>
      <ImageCard buttonAction={() => alert('alert here')} />
      <ImageCard buttonAction={() => alert('alert here')} />      
    </>
  )
}
export default Sider;
