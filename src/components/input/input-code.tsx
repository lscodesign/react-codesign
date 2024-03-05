import React, { useEffect, useState } from "react";
import Input from "./input-code-box";
import { Flex } from "../layout";
import { FlexProps } from "../layout/flex-types";
import { sizes } from "../../styles";
import { getColorVar } from "../../utils";

interface InputCodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, FlexProps {
  borderColor?: string;
  length?: number,
  onChange?: (value: string) => void;
}

export const InputCode: React.FC<InputCodeProps> = ({
  length,
  onChange,
  ...props
}) => {
  const inputs = Array(length || 6).fill("");

  const [index, setIndex] = useState(0);
  const [code, setCode] = useState<string[]>(inputs);

  useEffect(() => {
    onChange?.(code.toString().replaceAll(',', ""))
  }, [code]);

  function handleChange(index: number, value: string) {
    if (index >= inputs.length || !value || isNaN(Number(value))) {
      return;
    }

    if (value.length > 1) {
      const strArray = value.split("").slice(0, 6);

      setCode((old) => {
        const newState = [...old];
        strArray.map((v, i) => newState[i] = v);
        return newState;
      });

      return setIndex(strArray.length);
    }

    setCode((old) => {
      const newState = [...old];
      newState[index] = value;
      return newState;
    });

    setIndex(index + 1);
  }

  function handleBack(index: number, value: string) {
    setCode((old) => {
      const newState = [...old];
      newState[index] = "";
      return newState;
    });

    if (!value) {
      setIndex(index - 1);
    }
  }

  return (
    <Flex
      direction="row"
      gap={sizes.md}
      {...props}
    >
      {code.map((value, i) =>
        <Input
          key={i}
          color={props.color || getColorVar('text_primary')}
          isFocused={index === i}
          onBackspace={(value) => handleBack(i, value)}
          onChange={(value) => handleChange(i, value)}
          value={value}
          style={{ borderColor: props.borderColor || props.color || getColorVar('primary') }}
        />
      )}
      <div />
    </Flex>
  )
}