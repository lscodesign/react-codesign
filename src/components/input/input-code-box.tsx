import React, { createRef, useEffect } from "react";
import styled from "styled-components";
import { fontSizes, sizes } from "../../styles";
import { getThemeColors } from "../../context/ThemeContext";

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: ${sizes.border_radius};
  font-size: ${fontSizes.body};
  padding: 0;
  margin: 0;
  height: 3rem;
  width: 2.5rem;
  text-align: center;
`

const Input: React.FC<{
  isFocused: boolean;
  onBackspace: (value: string) => void;
  onChange: (value: string) => void;
  value: string;
}> = (props) => {
  const colors = getThemeColors();
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
      ref={ref}
      type="text"
      inputMode="numeric"
      maxLength={1}
      onChange={handleChange}
      onFocus={({ target }) => target.setSelectionRange(0, 1)}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      value={props.value}
      style={{ borderColor: colors.primary as string }}
    />
  )
}

export default Input;