import { CompoundColor } from "../../styles/colors";
import { IconName } from "../icon";

export interface ToastProps {
  icon?: IconName;
  loading?: boolean;
  message?: string;
  type?: CompoundColor;
}