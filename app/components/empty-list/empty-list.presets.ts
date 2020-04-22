import { ViewStyle, TextStyle } from "react-native"

import { color } from "~/theme/color"
import { spacing } from "~/theme"

const EMPTY_LIST: ViewStyle = {
  flex: 1,
  padding: spacing[5],
  justifyContent: "center",
  alignItems: "center",
}

const EMPTY_LIST_TX: TextStyle = {
  color: color.palette.grey,
  fontSize: spacing[3],
  fontFamily: "Montserrat-Regular",
  textAlign: "center",
}

export { EMPTY_LIST, EMPTY_LIST_TX }
