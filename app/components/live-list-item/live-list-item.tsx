import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import Moment from "moment"
import { View } from "react-native"

import { Text } from "../text"

import { styles } from "./live-list-item.presets"
import { LiveListItemProps } from "./live-list-item.props"

export function LiveListItem(props: LiveListItemProps) {
  const { onPress, id, date } = props

  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <View style={styles.labels}>
        <Text style={styles.label} numberOfLines={1} ellipsizeMode="tail" text={id} />
      </View>
      <View style={styles.date}>
        <Text style={styles.label} text={Moment(date).format("MM/DD/YYYY HH:mm:ss")} />
      </View>
    </TouchableOpacity>
  )
}
