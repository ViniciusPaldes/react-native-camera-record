import { TouchableOpacityProps } from "react-native"

import { TextProps } from "~/components"

export interface FullButtonProps extends TouchableOpacityProps {
  style?: object
  tx?: string
  text?: string
  loading?: boolean
  textProps?: TextProps
  icon?: string
  iconProps?: object
  children?: React.ReactNode
}
