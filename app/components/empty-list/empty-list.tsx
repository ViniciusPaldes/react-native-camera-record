import React from "react"
import { View } from "react-native"

import { Text } from "~/components"

import { styles } from "./empty-list.presets"
import { EmptyListProps } from "./empty-list.props"

export function EmptyList(props: EmptyListProps) {
  return (
    <View style={styles.root}>
      <Text style={styles.text} tx={props.tx} />
    </View>
  )
}
