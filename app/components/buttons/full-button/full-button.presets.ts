import { ViewStyle, TextStyle } from "react-native"

import { color, spacing } from "~/theme"

const BUTTON: ViewStyle = {
  backgroundColor: color.palette.secondary,
  borderRadius: 2,
  height: spacing[8],
  paddingHorizontal: spacing[3],
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}

const BUTTON_DISABLED: ViewStyle = {
  backgroundColor: color.palette.lighterGrey,
}

const BUTTON_LOADING: ViewStyle = {
  justifyContent: "space-between",
}

const ICON_TEXT_WRAPPER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const ICON: ViewStyle = {
  marginEnd: 10,
}

const TEXT: TextStyle = {
  color: color.palette.white,
  textTransform: "uppercase",
  textAlign: "center",
}

const TEXT_DISABLED: TextStyle = {
  color: color.palette.grey,
}

const BLANK: ViewStyle = {
  width: 24,
}

const LOADING = {}

export {
  BUTTON,
  BUTTON_DISABLED,
  BUTTON_LOADING,
  ICON_TEXT_WRAPPER,
  ICON,
  TEXT,
  TEXT_DISABLED,
  BLANK,
  LOADING,
}
