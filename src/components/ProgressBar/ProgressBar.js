/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';



const ProgressBar = ({ value, size, color = COLORS.primary}) => {  
  const CONTAINERS = {
    large: LargeContainer,
    medium: MediumContainer,
    small: SmallContainer,
  };

  const Component = CONTAINERS[size]
  const rightRadius = value == 100 ? 5 : value >= 99.8 ? 3 : 0;
  return (
    <Component>
      <Progress 
        style={{'--right-radius': `${rightRadius}px`}}
        value={value}
        color={color}
        />
      </Component>
    );
};

const Container = styled.div`
  width: 300px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const LargeContainer = styled(Container)`
  padding: 5px;
  height: 28px;
  border-radius: 8px;
`
const MediumContainer = styled(Container)`
  padding: 0px;
  height: 13px;
  border-radius: 8px;
`

const SmallContainer = styled(Container)`
  height: 7px;
  border-radius: 12px;
`

const Progress = styled.div`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color:  ${props => props.color};
  width: ${props => props.value}%;
  height: 100%;
  border-top-right-radius: var(--right-radius);
  border-bottom-right-radius: var(--right-radius);;
`

export default ProgressBar;
