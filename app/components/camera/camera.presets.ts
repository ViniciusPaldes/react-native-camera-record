import { StyleSheet } from "react-native"

import { color, spacing } from "~/theme"

export const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },

  location: {
    backgroundColor: color.palette.black54,
    color: color.palette.white,
    margin: spacing[3],
    padding: spacing[3]
  },

  notAuthorized: {
    backgroundColor: color.palette.white,
    flex: 1,
  },

  recordIcon: {},

  startButton: {
    alignSelf: "center",
    bottom: 0,
    margin: spacing[3],
    position: "absolute",
  },

  touchableContainer: {
    flex: 1,
  },

  typeButton: {
    bottom: 0,
    margin: spacing[3],
    position: "absolute",
    right: 0,
  },

  typeIcon: {}

})
