import { StyleSheet } from "react-native"

import { color, spacing, wp } from "~/theme"

export const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: color.palette.primary,
    color: color.palette.black,
    marginBottom: spacing[3],
    width: wp(90)
  },
  content: {
    flex: 1
  },
  root: {
    flex: 1,
    justifyContent: "center",
    marginTop: spacing[5]
  }
})
