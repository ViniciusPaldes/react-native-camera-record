import React, { useState, useEffect } from "react"
import Video from "react-native-video"
import { StyleSheet } from "react-native"

import { Screen } from "~/components"

import { VideoPlayerScreenProps } from "./video-player-screen.props"
import { styles } from "./video-player-screen.presets"

export const VideoPlayerScreen: React.FunctionComponent<VideoPlayerScreenProps> = props => {
  const { item } = props.route.params
  const { videoList } = item

  const [currentVideo, setCurrentVideo] = useState(0)
  const [currrentUrl, setCurrentUrl] = useState(videoList.list[0].url)

  const onBuffer = () => {
    __DEV__ && console.tron.log("onBuffer")
  }

  const onError = e => {
    __DEV__ && console.tron.log("OnError", e)
  }

  useEffect(() => {
    setCurrentUrl(videoList.list[currentVideo].url)
  }, [currentVideo])

  /**
   * When end , play the next video in the list
   */
  const onEnd = () => {
    if (currentVideo + 1 < videoList.list.length) {
      setCurrentVideo(currentVideo + 1)
    }
  }

  return (
    <Screen style={styles.root}>
      <Video
        source={{ uri: currrentUrl }}
        style={StyleSheet.absoluteFill}
        onBuffer={onBuffer}
        onError={onError}
        onEnd={onEnd}
        resizeMode="cover"
      />
    </Screen>
  )
}
