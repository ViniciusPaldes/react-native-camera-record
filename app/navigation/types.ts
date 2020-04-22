import { VideoItem } from "~/models/video-item"

export type RootParamList = {
  primaryStack: undefined
}

export type PrimaryParamList = {
  main: undefined
  videoPlayer: {item: VideoItem}
}
