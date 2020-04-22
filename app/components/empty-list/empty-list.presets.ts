import { StyleSheet } from "react-native"

import { color } from "~/theme/color"
import { spacing } from "~/theme"

export const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: spacing[5]
  },

  text: {
    color: color.palette.grey,
    fontFamily: "Montserrat",
    fontSize: 18,
    textAlign: "center"
  }

})
