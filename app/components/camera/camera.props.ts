import { RNCameraProps } from "react-native-camera"

export interface CameraProps extends RNCameraProps {
  open: boolean
  close: () => void
}
