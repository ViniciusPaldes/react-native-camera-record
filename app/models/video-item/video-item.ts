import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const VideoItemModel = types
  .model("VideoItem")
  .props({
    id: types.optional(types.string, ""),
    url: types.optional(types.string, ""),
    date: types.optional(types.Date, new Date(1990, 1, 1))
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    setId(id: string) {
      self.id = id
    },
    setUrl(url: string) {
      self.url = url
    },
    setDate(date: Date) {
      self.date = date
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type VideoItemType = Instance<typeof VideoItemModel>
export interface VideoItem extends VideoItemType {}
type VideoItemSnapshotType = SnapshotOut<typeof VideoItemModel>
export interface VideoItemSnapshot extends VideoItemSnapshotType {}
