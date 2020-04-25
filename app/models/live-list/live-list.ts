import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { LiveItem, LiveItemModel } from "../live-item"
import { VideoListModel } from "../video-list"

const uuid = require("react-native-uuid")

/**
 * Model description here for TypeScript hints.
 */
export const LiveListModel = types
  .model("LiveList")
  .props({
    list: types.optional(types.array(LiveItemModel), []),
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    addLiveItem(liveItem: LiveItem) {
      self.list.push(liveItem)
    },
    createLive() {
      const item = LiveItemModel.create()
      const videoList = VideoListModel.create()
      const idLive = uuid.v4()
      item.setId(idLive)
      item.setDate(new Date())
      item.setVideoList(videoList)
      self.list.push(item)
      return idLive
    },
    addVideoIntoLive(idLive, id, url, date) {
      const liveToAdd = self.list.filter(item => item.id === idLive)[0]
      liveToAdd.videoList.addItem(id, url, date)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type LiveListType = Instance<typeof LiveListModel>
export interface LiveList extends LiveListType {}
type LiveListSnapshotType = SnapshotOut<typeof LiveListModel>
export interface LiveListSnapshot extends LiveListSnapshotType {}
