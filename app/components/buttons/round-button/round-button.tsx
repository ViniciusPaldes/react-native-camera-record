import React from "react"
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"

import { color, spacing } from "~/theme"
import { Loading } from "~/components"

import { BUTTON, BUTTON_ELEVATED, BUTTON_DISABLED, ICON, LOADING } from "./round-button.presets"
import { RoundButtonProps } from "./round-button.props"

export function RoundButton(props: RoundButtonProps) {
  const { style, size, elevated, icon, loading, disabled, onPress, iconProps, ...rest } = props

  let buttonStyle = { ...BUTTON, ...style }

  if (disabled) {
    buttonStyle = { ...buttonStyle, ...BUTTON_DISABLED }
  }

  if (elevated) {
    buttonStyle = { ...BUTTON_ELEVATED, ...buttonStyle }
  }

  return (
    <TouchableOpacity
      style={{ ...buttonStyle, height: size, width: size, borderRadius: size }}
      onPress={disabled ? null : onPress}
      activeOpacity={disabled ? 1 : 0.75}
      {...rest}
    >
      {loading ? (
        <Loading
          style={LOADING}
          color={disabled ? color.palette.grey : color.palette.white}
          size={24}
        />
      ) : (
        <Icon
          name={icon}
          size={24}
          color={disabled ? color.palette.grey : color.palette.white}
          style={ICON}
          {...iconProps}
        />
      )}
    </TouchableOpacity>
  )
}

RoundButton.defaultProps = {
  size: spacing[8],
}
