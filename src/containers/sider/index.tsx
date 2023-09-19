import React, { FC } from "react";
import { SiderProps } from "./types";

export const Sider: FC<SiderProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      Sider {props.siderSide}
    </div>
  )
}
export default Sider;
