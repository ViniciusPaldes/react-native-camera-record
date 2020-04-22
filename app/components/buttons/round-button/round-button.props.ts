import { TouchableOpacityProps } from "react-native"

export interface RoundButtonProps extends TouchableOpacityProps {
  style?: object
  size?: number
  elevated?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconProps?: object
  children?: React.ReactNode
}
