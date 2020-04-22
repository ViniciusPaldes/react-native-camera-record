import { TextStyle, ViewStyle } from "react-native"

import { color, spacing, typography } from "~/theme"

const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
}

const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.palette.grey,
  padding: 0,
  fontSize: 18,
  backgroundColor: color.palette.white,
  borderBottomColor: color.palette.lighterGrey,
  borderBottomWidth: 1,
  paddingBottom: 1,
  paddingHorizontal: 0,
}

const INPUT_FOCUSED: TextStyle = {
  borderBottomColor: color.palette.grey,
}

const INPUT_DISABLED: TextStyle = {
  backgroundColor: color.palette.lighterGrey,
  paddingHorizontal: spacing[1],
}

const LABEL: TextStyle = {
  fontFamily: "Montserrat",
  color: color.palette.black,
}

const HIGHTLIGHT: TextStyle = {
  fontFamily: "Montserrat-Bold",
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

export { CONTAINER, INPUT, INPUT_FOCUSED, INPUT_DISABLED, LABEL, HIGHTLIGHT, PRESETS }
