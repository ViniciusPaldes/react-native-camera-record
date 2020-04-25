import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { VideoListModel } from "../video-list"
import { RecordModel } from "../record"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  videoListStore: types.optional(VideoListModel, {}),
  recordStore: types.optional(RecordModel, {})
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
