import { ModalProps as RNModalProps } from "react-native"

export interface ModalProps extends RNModalProps {
  close: () => void
  children?: React.ReactNode
}
