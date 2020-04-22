import React, { useRef, useState, useMemo } from "react"
import { Modal, View, TextStyle } from "react-native"
import { RNCamera } from "react-native-camera"

import { color } from "~/theme"
import { FullButton, EmptyList, RoundButton } from "~/components"
import { scannerPermissionsOptions } from "~/constants/camera"

import {
  TOUCHABLE_CONTAINER,
  CAMERA,
  NOT_AUTHORIZED,
  FLASH_BUTTON,
  FLASH_ICON,
} from "./camera.presets"
import { CameraProps } from "./camera.props"

export function Camera(props: CameraProps) {
  const { open, close, ...rest } = props

  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off)

  const flashStyle = useMemo(() => {
    let style: TextStyle = FLASH_ICON

    switch (flashMode) {
      case RNCamera.Constants.FlashMode.off:
        break
      case RNCamera.Constants.FlashMode.torch:
        style = { ...style, color: color.palette.yellow }
        break
      default:
    }

    return style
  }, [flashMode])

  const cameraRef = useRef<RNCamera>()

  const AskPermission = async () => {
    if (cameraRef.current) {
      await cameraRef.current.refreshAuthorizationStatus()
    }
  }

  const handleFlashChange = () => {
    switch (flashMode) {
      case RNCamera.Constants.FlashMode.off:
        setFlashMode(RNCamera.Constants.FlashMode.torch)
        break
      case RNCamera.Constants.FlashMode.torch:
        setFlashMode(RNCamera.Constants.FlashMode.off)
        break
      default:
    }
  }

  const NoAuthorizedView = () => (
    <View style={NOT_AUTHORIZED}>
      <EmptyList
        onPress={AskPermission}
        text="Utilização da câmera não autorizada, clique aqui para tentar novamente"
      />
    </View>
  )

  return (
    <Modal visible={open} onRequestClose={close}>
      <View style={TOUCHABLE_CONTAINER}>
        <>
          <RNCamera
            style={CAMERA}
            ref={cameraRef}
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            flashMode={flashMode}
            notAuthorizedView={<NoAuthorizedView />}
            androidCameraPermissionOptions={scannerPermissionsOptions}
            {...rest}
          >
            <RoundButton
              icon="bolt"
              onPress={handleFlashChange}
              elevated
              style={FLASH_BUTTON}
              iconProps={{ style: flashStyle }}
            />
          </RNCamera>
          <FullButton onPress={close}>Cancelar</FullButton>
        </>
      </View>
    </Modal>
  )
}
