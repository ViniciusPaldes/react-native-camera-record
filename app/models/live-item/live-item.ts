import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { VideoListModel, VideoList } from "../video-list"

/**
 * Model description here for TypeScript hints.
 */
export const LiveItemModel = types
  .model("LiveItem")
  .props({
    id: types.optional(types.string, ""),
    date: types.optional(types.Date, new Date(1990, 1, 1)),
    videoList: types.optional(VideoListModel, {}),
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    setId(id: string) {
      self.id = id
    },
    setDate(date: Date) {
      self.date = date
    },
    setVideoList(videoList: VideoList) {
      self.videoList = videoList
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type LiveItemType = Instance<typeof LiveItemModel>
export interface LiveItem extends LiveItemType {}
type LiveItemSnapshotType = SnapshotOut<typeof LiveItemModel>
export interface LiveItemSnapshot extends LiveItemSnapshotType {}
