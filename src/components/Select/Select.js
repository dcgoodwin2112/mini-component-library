import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationLayer>
        {displayedValue}
        <IconWrapper style={{"--icon-size": 24 + "px"}}>
          <Icon id="chevron-down" width={24}/>
        </IconWrapper>
      </PresentationLayer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationLayer = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  border: none;
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
  ${NativeSelect}:focus + & {
    border-radius: 0;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 6px;
  top: 0;
  bottom: 0;
  height: var(--icon-size);
  width: var(--icon-size);
  margin-block: auto;
  pointer-events: none;
`;

export default Select;
