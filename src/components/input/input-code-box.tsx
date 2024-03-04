import React, { createRef, useEffect } from "react";
import styled from "styled-components";
import { fontSizes, sizes } from "../../styles";

const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop: string) => !['isFocused', 'onBackspace'].includes(prop)
})`
  background-color: transparent;
  border: 1px solid black;
  border-radius: ${sizes.border_radius};
  color: ${props => props.color};
  font-size: ${fontSizes.body};
  padding: 0;
  margin: 0;
  height: 3rem;
  width: 2.5rem;
  text-align: center;
`;

export interface InputBoxProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'style' | 'id' | 'className'> {
  isFocused: boolean;
  onBackspace: (value: string) => void;
  onChange: (value: string) => void;
  value: string;
}

const Input: React.FC<InputBoxProps> = (props) => {
  const ref = createRef<HTMLInputElement>();

  useEffect(() => {
    if (ref.current !== document.activeElement && props.isFocused) {
      ref.current?.focus();
    }
  }, [props.isFocused])

  function handleChange() {
    // props.onChange(e.target.value);
  }

  function handlePaste(e: any) {
    props.onChange(e.clipboardData.getData("text"));
  }

  function handleKeyDown(e: any) {
    if (e.key === "Backspace") {
      return props.onBackspace(e.target.value);
    }

    if (!isNaN(Number(e.key))) {
      props.onChange(e.key);
    }
  }

  return (
    <StyledInput
      {...props}
      ref={ref}
      type="text"
      inputMode="numeric"
      maxLength={1}
      onChange={handleChange}
      onFocus={({ target }) => target.setSelectionRange(0, 1)}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      value={props.value}
    />
  )
}

export default Input;