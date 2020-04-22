import React from "react"
import { View } from "react-native"

import { Text } from "~/components"

import { EMPTY_LIST, EMPTY_LIST_TX } from "./empty-list.presets"
import { EmptyListProps } from "./empty-list.props"

export function EmptyList(props: EmptyListProps) {
  return (
    <View style={EMPTY_LIST}>
      <Text style={EMPTY_LIST_TX} {...props} />
    </View>
  )
}
