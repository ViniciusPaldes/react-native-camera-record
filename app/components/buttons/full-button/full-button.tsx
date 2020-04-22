import React from "react"
import { TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"

import { color } from "~/theme"
import { Text, Loading } from "~/components"

import {
  BUTTON,
  BUTTON_DISABLED,
  BUTTON_LOADING,
  ICON_TEXT_WRAPPER,
  ICON,
  TEXT,
  BLANK,
  LOADING,
  TEXT_DISABLED,
} from "./full-button.presets"
import { FullButtonProps } from "./full-button.props"

export function FullButton(props: FullButtonProps) {
  const {
    style,
    icon,
    loading,
    disabled,
    onPress,
    tx,
    text,
    children,
    textProps: { style: overrideTextStyle = {}, ...restText } = {},
    iconProps,
    ...rest
  } = props

  let buttonStyle = { ...BUTTON, ...style }
  let textStyle = { ...TEXT, ...overrideTextStyle }

  if (loading) {
    buttonStyle = { ...buttonStyle, ...BUTTON_LOADING }
  }

  if (disabled) {
    buttonStyle = { ...buttonStyle, ...BUTTON_DISABLED }
    textStyle = { ...textStyle, ...TEXT_DISABLED }
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={disabled ? null : onPress}
      activeOpacity={disabled ? 1 : 0.75}
      {...rest}
    >
      {loading && <View style={BLANK} />}
      <View style={ICON_TEXT_WRAPPER}>
        {icon && (
          <Icon
            name={icon}
            size={24}
            color={disabled ? color.palette.grey : color.palette.white}
            style={ICON}
            {...iconProps}
          />
        )}
        <Text style={textStyle} tx={tx} text={text} {...restText}>
          {children}
        </Text>
      </View>
      {loading && (
        <Loading
          style={LOADING}
          color={disabled ? color.palette.grey : color.palette.white}
          size={24}
        />
      )}
    </TouchableOpacity>
  )
}
