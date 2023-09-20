import React, { FC } from 'react';
import Sider from '../../components/sider';
import { FlexContainer, SiderWrapper } from './style';

export const MainScreen: FC = () => {
  return (
    <FlexContainer>
      <SiderWrapper>
        <Sider siderSide='left' title='Lado Esquerdo' />
      </SiderWrapper>
      <SiderWrapper>
        <Sider siderSide='right' title='Lado Direito' />
      </SiderWrapper>
    </FlexContainer>
  )
}
