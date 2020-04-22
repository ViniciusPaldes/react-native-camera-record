import React from "react"
import Video from "react-native-video"
import { StyleSheet } from "react-native"

import { Screen, VideoListItem, Text } from "~/components"
import { isIos } from "~/utils/device"

import { VideoPlayerScreenProps } from "./video-player-screen.props"
import { styles } from "./video-player-screen.presets"

export const VideoPlayerScreen: React.FunctionComponent<VideoPlayerScreenProps> = props => {
  const { item } = props.route.params
  const { id, url, date } = item

  console.tron.log("data", id, url, date)
  console.tron.log("just testing husky", id, url, date)

  let newUrl
  if (isIos) {
    newUrl = url.replace("file://", "")
  } else {
    newUrl = url
  }

  console.tron.log("newUrl", newUrl)
  const onBuffer = () => {
    console.tron.log("onBuffer")
  }

  const onError = e => {
    console.tron.log("OnError", e)
  }

  // const file = require(url)

  // console.tron.log('file', file)
  return (
    <Screen style={styles.root}>
      <Text style={styles.text} text={id} />
      <VideoListItem id={id} uri={url} date={date} />
      <Video
        source={{ uri: url }} // Can be a URL or a local file.
        style={StyleSheet.absoluteFill}
        onBuffer={onBuffer} // Callback when remote video is buffering
        onError={onError}
        resizeMode="cover"
      />
    </Screen>
  )
}
