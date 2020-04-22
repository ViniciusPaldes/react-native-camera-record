import React, { useState } from "react"
import { FlatList } from "react-native"

import { Screen, FullButton, Camera, VideoListItem, EmptyList } from "~/components"
import { useStores } from "~/models/root-store"

import { MainScreenProps } from "./main-screen.props"
import { styles } from "./main-screen.presets"

export const MainScreen: React.FunctionComponent<MainScreenProps> = props => {
  const { videoListStore } = useStores()
  const [cameraOpen, setCameraOpen] = useState(false)

  const handleOpenCamera = () => {
    setCameraOpen(true)
  }

  const handleCloseCamera = () => {
    setCameraOpen(false)
  }

  const runVideo = (i) => {
    props.navigation.navigate("videoPlayer", { item: i.item })
  }

  return (
    <Screen style={styles.root}>
      <FlatList
        style={styles.content}
        data={videoListStore.list}
        keyExtractor={(i) => i.id}
        renderItem={(i) =>
          <VideoListItem
            onPress={() => runVideo(i)}
            uri={i.item.url}
            id={i.item.id}
            date={i.item.date}
          />
        }
        ListEmptyComponent={<EmptyList tx="mainScreen.emptyList"/>}
      />
      <FullButton style={styles.button} tx="mainScreen.open" onPress={handleOpenCamera}/>
      <Camera
        open={cameraOpen}
        close={handleCloseCamera}
      />
    </Screen>
  )
}
