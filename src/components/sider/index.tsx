import React, { FC } from "react";
import { SiderProps } from "./types";
import ImageCard from "../card";

export const Sider: FC<SiderProps> = (props) => {
  const handleButtonAction = () => {
    alert('teste button action')
  }


  return (
    <div>
      <ImageCard buttonAction={handleButtonAction} />
    </div>
  )
}
export default Sider;
