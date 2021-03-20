import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const sizes = {
  small: {
    height: "8",
    radius: "4",
    padding: "0",
  },
  medium: {
    height: "12px",
    radius: "4",
    padding: "0",
  },
  large: {
    height: "16",
    radius: "8",
    padding: "4",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = sizes[size];

  if (!styles) {
    throw new Error(`Size value is not valid`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--border-radius": styles.radius + "px",
        "--container-padding": styles.padding + "px",
      }}
    >
      <ProgressWrapper>
        <Progress
          style={{
            width: value + "%",
            height: styles.height + "px",
            padding: styles.padding + "px",
          }}
        />
      </ProgressWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--border-radius);
  padding: var(--container-padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const ProgressWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Progress = styled.div`
  border-radius: 4px 0 0 4px;
  color: ${COLORS.primary};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
