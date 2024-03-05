import React from "react";
import styled from "styled-components"
import { Icon } from "../icon";
import { getApperance } from "./toast-styles";
import { ToastProps } from "./toast-types";
import { Loader } from "../loading";
import { Text } from "../text";
import { sizes } from "../../styles";

const Toast = styled.div.withConfig({
  shouldForwardProp: (prop) => !['type'].includes(prop)
})<ToastProps>`
  display: flex;
  align-items: center;
  border-radius: ${sizes.border_radius};
  gap: ${sizes.md};
  padding: ${sizes.md};
  min-height: 40px;
  min-width: 250px;
  ${props => getApperance(props.type!)};
`;

export default (props: ToastProps) => (
  <Toast type={props.type || 'primary'}>
    {props.loading ?
      <Loader />
      :
      <Icon
        name={props.icon || 'plus'}
      />
    }
    <Text as="span" size="body">
      {props.message || 'Toast message'}
    </Text>
  </Toast>
)