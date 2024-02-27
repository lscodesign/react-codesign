import { CompoundColor } from "../../styles";
import { IconName } from "../icon";

export interface ToastProps {
  icon?: IconName;
  loading?: boolean;
  message?: string;
  type?: CompoundColor;
}