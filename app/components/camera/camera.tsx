import React, { useRef, useState, useMemo } from "react"
import { Modal, View, TextStyle } from "react-native"
import { RNCamera } from "react-native-camera"

import { color } from "~/theme"
import { FullButton, EmptyList, RoundButton } from "~/components"
import { scannerPermissionsOptions } from "~/constants/camera"
import { translate } from "~/i18n"
import { Text } from "../text"
import { useStores } from "~/models/root-store"

import { CameraProps } from "./camera.props"
import { styles } from "./camera.presets"

export function Camera(props: CameraProps) {
  const { open, close, ...rest } = props

  const { videoListStore } = useStores()

  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back)
  const [recording, setRecording] = useState(false)

  const typeStyle = useMemo(() => {
    let style: TextStyle = styles.typeIcon

    switch (cameraType) {
      case RNCamera.Constants.Type.front:
        style = { ...style, color: color.palette.yellow }
        break
      case RNCamera.Constants.Type.back:
        break
      default:
    }

    return style
  }, [cameraType])

  const recordStyle = useMemo(() => {
    let style: TextStyle = styles.recordIcon

    if (recording) {
      style = { ...style, color: color.palette.yellow }
    }
    return style
  }, [recording])

  const cameraRef = useRef<RNCamera>()

  const AskPermission = async () => {
    if (cameraRef.current) {
      await cameraRef.current.refreshAuthorizationStatus()
    }
  }

  const handleTypeChange = () => {
    switch (cameraType) {
      case RNCamera.Constants.Type.back:
        setCameraType(RNCamera.Constants.Type.front)
        break
      case RNCamera.Constants.Type.front:
        setCameraType(RNCamera.Constants.Type.back)
        break
      default:
    }
  }

  const record = async () => {
    if (recording) {
      cameraRef.current.stopRecording()
    } else {
      const file = await cameraRef.current.recordAsync()
      videoListStore.addItem(file.uri, new Date())
      close()
    }
  }

  const handleStartRecording = (event) => {
    console.tron.log("Event: ", event)
    setRecording(true)
  }

  const handleStopRecording = () => {
    setRecording(false)
  }

  const NoAuthorizedView = () => (
    <View style={styles.notAuthorized}>
      <EmptyList
        text={translate("camera.permissionDenied")}
      />
    </View>
  )

  return (
    <Modal visible={open} onRequestClose={close}>
      <View style={styles.touchableContainer}>
        <>
          <RNCamera
            style={styles.camera}
            ref={cameraRef}
            captureAudio={false}
            type={cameraType}
            notAuthorizedView={<NoAuthorizedView />}
            androidCameraPermissionOptions={scannerPermissionsOptions}
            onRecordingStart={(e) => handleStartRecording(e)}
            onRecordingEnd={handleStopRecording}
            {...rest}
          >
            <RoundButton
              icon="video"
              onPress={record}
              elevated
              style={styles.startButton}
              iconProps={{ style: recordStyle }}
            />

            <RoundButton
              icon="grin"
              onPress={handleTypeChange}
              elevated
              style={styles.typeButton}
              iconProps={{ style: typeStyle }}
            />
          </RNCamera>
          <FullButton onPress={close}>{translate("mainScreen.cancel")}</FullButton>
        </>
      </View>
    </Modal>
  )
}
