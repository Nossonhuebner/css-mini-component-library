import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelect value={value} onChange={onChange}>
      {children}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  padding-right: 37px;
  border-right: 15px solid transparent;
  border-left: 17px solid transparent;
  border-top: 13px solid transparent;
  border-bottom: 13px solid transparent;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};


  &:hover {
    color: ${COLORS.black}
  }
`


export default Select;
