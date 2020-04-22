import React from "react"
import { ActivityIndicator } from "react-native"

import { color } from "~/theme"

import { LOADING } from "./loading.presets"
import { LoadingProps } from "./loading.props"

export function Loading(props: LoadingProps) {
  return <ActivityIndicator style={LOADING} color={color.palette.primary} {...props} />
}
