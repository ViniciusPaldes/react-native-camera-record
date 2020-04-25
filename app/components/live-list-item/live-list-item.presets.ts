import { StyleSheet } from "react-native"

import { color, spacing } from "~/theme"

export const styles = StyleSheet.create({
  date: {
    alignItems: "flex-end",
    flex: 2,
    justifyContent: "center",
  },
  label: {
    color: color.palette.black,
    fontSize: 12,
    marginVertical: spacing[1],
    textAlign: "center",
  },
  labels: {
    flexDirection: "column",
    flex: 5,
    justifyContent: "center",
  },
  root: {
    borderBottomColor: color.palette.lighterGrey,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    paddingEnd: spacing[3],
    paddingStart: spacing[3],
    paddingVertical: spacing[2],
  },
})
