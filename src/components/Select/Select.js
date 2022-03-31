import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);


  return (
    <Wrapper>
      <Selectt value={value} onChange={onChange}>
        {children}
      </Selectt>
      <Display>
        <DisplayValue>{displayedValue}</DisplayValue>
        <IconWrapper>
          <Icon id='chevron-down'/>
        </IconWrapper>
      </Display>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: max-content;
`

const IconWrapper = styled.div`
 position: absolute;
 top: 7px;
 right: 0;
 bottom: 0;
`

const Display = styled.div`
    pointer-events: none;
    border: 1px solid black;
    position: relative;
    padding: 10px;
    padding-right: 35px;
    margin-right: 100px;
`

const DisplayValue = styled.div`

`

const Selectt = styled.select`
    color: transparent;
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    max-width: min-content;
    &:focus {
      outline: none;
    }
`

export default Select;
