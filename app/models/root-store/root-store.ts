import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { RecordModel } from "../record"
import { LiveListModel } from "../live-list"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  recordStore: types.optional(RecordModel, {}),
  liveListStore: types.optional(LiveListModel, {})
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
