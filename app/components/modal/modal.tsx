/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react"
import {
  Animated,
  TouchableHighlight,
  Modal as RNModal,
  KeyboardAvoidingView,
} from "react-native"

import { isIos } from "~/utils/device"

import { styles } from "./modal.presets"
import { ModalProps } from "./modal.props"

const Background = Animated.createAnimatedComponent(TouchableHighlight)

export function Modal(props: ModalProps) {
  const { visible, children, close, ...rest } = props

  const [animation] = useState(new Animated.Value(0))

  useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start()
    }
  }, [visible])

  return (
    <RNModal visible={visible} onRequestClose={close} animationType="none" transparent {...rest}>
      <Background
        onPress={close}
        style={{
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1],
          }),
          ...styles.background,
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [250, 0],
                }),
              },
            ],
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <KeyboardAvoidingView behavior={isIos ? "padding" : null} enabled={!!isIos}>
            {children}
          </KeyboardAvoidingView>
        </Animated.View>
      </Background>
    </RNModal>
  )
}
