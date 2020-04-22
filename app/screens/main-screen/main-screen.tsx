import React from "react"

import { Screen, FullButton } from "~/components"

import { MainScreenProps } from "./main-screen.props"
import { styles } from "./main-screen.presets"

export const MainScreen: React.FunctionComponent<MainScreenProps> = props => {
  return (
    <Screen style={styles.root}>
      <FullButton style={styles.texto} tx="mainScreen.open"/>
    </Screen>
  )
}
