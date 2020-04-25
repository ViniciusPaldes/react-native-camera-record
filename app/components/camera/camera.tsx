import React, { useRef, useState, useMemo } from "react"
import { Modal, View, TextStyle } from "react-native"
import { RNCamera } from "react-native-camera"

import { color } from "~/theme"
import { FullButton, EmptyList, RoundButton } from "~/components"
import { scannerPermissionsOptions } from "~/constants/camera"
import { translate } from "~/i18n"
import { useStores } from "~/models/root-store"

import { CameraProps } from "./camera.props"
import { styles } from "./camera.presets"

const uuid = require("react-native-uuid")

export function Camera(props: CameraProps) {
  const { open, close, ...rest } = props

  const { recordStore, liveListStore } = useStores()

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

  const handleTypeChange = () => {
    switch (cameraType) {
      case RNCamera.Constants.Type.back:
        recordStore.setEndedByChanging(true)
        setCameraType(RNCamera.Constants.Type.front)
        break
      case RNCamera.Constants.Type.front:
        recordStore.setEndedByChanging(true)
        setCameraType(RNCamera.Constants.Type.back)
        break
      default:
    }
  }

  const handleStopRecording = () => {
    setRecording(false)
  }

  /**
   * Recursive method to record videos until the user stop to record
   */
  const recordVideo = () => {
    recordStore.setEndedByChanging(false)
    cameraRef.current.recordAsync().then(file => {
      __DEV__ && console.tron.log("Ended to record", recordStore.endedByChanging)
      if (recordStore.endedByChanging) {
        // This means that the user fliped the camera, so start it again the recording
        liveListStore.addVideoIntoLive(recordStore.recordingIdLive, uuid.v4(), file.uri, new Date())
        recordVideo()
      } else {
        handleStopRecording()
        liveListStore.addVideoIntoLive(recordStore.recordingIdLive, uuid.v4(), file.uri, new Date())
        close()
      }
    })
  }

  const record = async () => {
    if (recording) {
      cameraRef.current.stopRecording()
    } else {
      recordStore.setRecordingIdLive(liveListStore.createLive())
      recordVideo()
    }
  }

  const handleStartRecording = () => {
    setRecording(true)
  }

  const NoAuthorizedView = () => (
    <View style={styles.notAuthorized}>
      <EmptyList text={translate("camera.permissionDenied")} />
    </View>
  )

  return (
    <Modal visible={open} onRequestClose={close}>
      <View style={styles.touchableContainer}>
        <>
          <RNCamera
            style={styles.camera}
            ref={cameraRef}
            captureAudio={true}
            type={cameraType}
            notAuthorizedView={<NoAuthorizedView />}
            androidCameraPermissionOptions={scannerPermissionsOptions}
            onRecordingStart={handleStartRecording}
            onRecordingEnd={handleStopRecording}
            playSoundOnCapture={true}
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
