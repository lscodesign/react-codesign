import React from "react";
import styled from "styled-components"
import { Icon } from "../icon";
import { getApperance } from "./toast-styles";
import { ToastProps } from "./toast-types";
import { Loader } from "../loading";
import { Text } from "../text";
import { fontSizes, sizes } from "../../styles";
import { getThemeColors } from "../../context/ThemeContext";

const Toast = styled.div.withConfig({
  shouldForwardProp: (prop) => !['_styles'].includes(prop)
})<{ _styles: string }>`
  display: flex;
  align-items: center;
  border-radius: ${sizes.border_radius};
  gap: ${sizes.md};
  padding: ${sizes.md};
  min-height: 40px;
  min-width: 250px;
  ${props => props._styles};
`;

export default (props: ToastProps) => (
  <Toast _styles={getApperance(getThemeColors(), props.type || 'primary')}>
    {props.loading ?
      <Loader />
      :
      <Icon
        name={props.icon || 'plus'}
      />
    }
    <Text as="span" size={fontSizes.body}>
      {props.message || 'Toast message'}
    </Text>
  </Toast>
)