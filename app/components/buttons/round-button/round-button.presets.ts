import { ViewStyle } from "react-native"

import { color, spacing } from "~/theme"

const BUTTON: ViewStyle = {
  backgroundColor: color.palette.secondary,
  width: spacing[6],
  height: spacing[6],
  borderRadius: spacing[6],
  justifyContent: "center",
  alignItems: "center",
  padding: spacing[2],
}

const BUTTON_ELEVATED: ViewStyle = {
  shadowColor: color.palette.black,
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.6,
  shadowRadius: 5,
  elevation: 3,
}

const BUTTON_DISABLED: ViewStyle = {
  backgroundColor: color.palette.lighterGrey,
}

const ICON: ViewStyle = {}

const LOADING = {}

export { BUTTON, BUTTON_ELEVATED, BUTTON_DISABLED, ICON, LOADING }
