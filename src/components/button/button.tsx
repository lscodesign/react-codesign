import React from "react";
import styled from "styled-components";
import { ButtonProps, CustomProps } from "./button-types";
import { getApperance, getSize } from "./button-styles";
import { Loader } from "../loading";
import { sizes } from "../../styles";

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['scheme', 'variant', '_styles'].includes(prop)
}) <CustomProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${sizes.border_radius};
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  width: fit-content;
  ${(props) => props._styles};
`;

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  loadingText,
  scheme = 'primary',
  size = 'md',
  variant = 'solid',
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      _styles={`
        ${getApperance(scheme, variant)}
        ${getSize(size)}
      `}
    >
      {loading ?
        <>
          <Loader />
          {loadingText ? (typeof loadingText === 'string' ? loadingText : children) : ''}
        </>
        :
        children
      }
    </StyledButton>
  );
}

export default Button;