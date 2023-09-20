import { FC } from 'react';
import Sider from '../../components/sider';
import { ButtonWrapper, FlexContainer, SiderWrapper } from './style';
import ImageButton from '../../components/buttons/ImageButton';

export const MainScreen: FC = () => {
  return (
    <FlexContainer>
      <ButtonWrapper>
        <ImageButton />
      </ButtonWrapper>
      <div style={{ width: '100%', display: 'flex' }}>
        <SiderWrapper>
          <Sider siderSide='left' title='Lado Esquerdo' />
        </SiderWrapper>
        <SiderWrapper>
          <Sider siderSide='right' title='Lado Direito' />
        </SiderWrapper>
      </div>
    </FlexContainer>
  )
}
