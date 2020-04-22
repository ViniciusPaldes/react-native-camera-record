import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { VideoItemModel } from "../video-item"

/**
 * Model description here for TypeScript hints.
 */
export const VideoListModel = types
  .model("VideoList")
  .props({
    list: types.optional(types.array(VideoItemModel), [])
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    addItem(id: string, url: string, date: Date) {
      const videoItem = VideoItemModel.create()
      videoItem.setId(id)
      videoItem.setUrl(url)
      videoItem.setDate(date)
      self.list.push(videoItem)
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type VideoListType = Instance<typeof VideoListModel>
export interface VideoList extends VideoListType {}
type VideoListSnapshotType = SnapshotOut<typeof VideoListModel>
export interface VideoListSnapshot extends VideoListSnapshotType {}
