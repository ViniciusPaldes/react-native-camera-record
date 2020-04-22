import React, { useState } from "react"
import { View, TextInput, TextStyle, ViewStyle } from "react-native"

import { translate } from "~/i18n"
import { Text } from "~/components"
import { color } from "~/theme"
import { enhance } from "~/utils/enhanceStyles"

import { TextFieldProps } from "./text-field.props"
import {
  CONTAINER,
  INPUT,
  INPUT_FOCUSED,
  INPUT_DISABLED,
  LABEL,
  HIGHTLIGHT,
  PRESETS,
} from "./text-field.presets"

/**
 * Generic text field component
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    highlightTx,
    highlightText,
    labelProps: { style: labelStyleOverride = {}, ...restLabel } = {},
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    onFocus,
    onBlur,
    editable = true,
    ...rest
  } = props

  const [focused, setFocused] = useState(false)

  const handleFocus = e => {
    setFocused(true)
    if (onFocus) {
      onFocus(e)
    }
  }

  const handleBlur = e => {
    setFocused(false)
    if (onFocus) {
      onBlur(e)
    }
  }

  let containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset] }
  containerStyle = enhance([containerStyle, styleOverride])

  let inputStyle: TextStyle = INPUT
  let labeStyle: TextStyle = LABEL

  inputStyle = enhance([inputStyle, inputStyleOverride])

  if (labelStyleOverride) {
    labeStyle = enhance([labeStyle, labelStyleOverride])
  }

  if (focused) {
    inputStyle = { ...inputStyle, ...INPUT_FOCUSED }
  }

  if (!editable) {
    inputStyle = { ...inputStyle, ...INPUT_DISABLED }
  }

  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  const actualHightlight = highlightTx ? translate(highlightTx) : highlightText
  let renderText: React.ReactNode

  if (actualHightlight) {
    renderText = (
      <Text {...restLabel}>
        <Text style={labeStyle} tx={labelTx} text={label} />
        <Text style={{ ...labeStyle, ...HIGHTLIGHT }} text={actualHightlight} />
      </Text>
    )
  } else if (label || labelTx) {
    renderText = <Text style={labeStyle} tx={labelTx} text={label} {...restLabel} />
  }

  return (
    <View style={containerStyle}>
      {renderText}
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.lighterGrey}
        underlineColorAndroid={color.palette.transparent}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={editable}
        {...rest}
        style={inputStyle}
        ref={forwardedRef}
      />
    </View>
  )
}
