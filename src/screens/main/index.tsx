import { FC } from 'react';
import Sider from '../../components/sider';
import { ButtonWrapper, FlexContainer, SiderWrapper } from './style';
import ImageButton from '../../components/buttons/ImageButton';
import SelectLeftButton from '../../components/buttons/selectLeftButton';
import SelectRightButton from '../../components/buttons/selectRightButton';
import { Grid } from '@mui/material';

export const MainScreen: FC = () => {
  
  const arrayReactComponents = [
    <SelectLeftButton />,
    <ImageButton />,
    <SelectRightButton />
  ];

  return (
    <FlexContainer>
      <ButtonWrapper>
        <Grid container direction="row">
          {arrayReactComponents.map((component, index) => (
            <Grid item key={`buttons-cotrol-${index}`}>
              {component}
            </Grid>
          ))}
        </Grid>
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
