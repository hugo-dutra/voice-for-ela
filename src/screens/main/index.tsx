import React, { FC } from 'react';
import Sider from '../../components/sider';

export const MainScreen: FC = () => {
  return (
    <div>
      <Sider siderSide='left' title='Lado Esquerdo'/>
      <Sider siderSide='right' title='Lado Direito'/>
    </div>
  )
}