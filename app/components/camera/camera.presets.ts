import { ViewStyle, TextStyle } from "react-native"

import { color, spacing } from "~/theme"

const TOUCHABLE_CONTAINER: ViewStyle = {
  flex: 1,
}

const CAMERA: ViewStyle = {
  flex: 1,
}

const NOT_AUTHORIZED: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
}

const FLASH_BUTTON: ViewStyle = {
  position: "absolute",
  bottom: 0,
  right: 0,
  margin: spacing[3],
}

const FLASH_ICON: TextStyle = {}

export { TOUCHABLE_CONTAINER, CAMERA, NOT_AUTHORIZED, FLASH_BUTTON, FLASH_ICON }
