import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const RecordModel = types
  .model("Record")
  .props({
    endedByChanging: types.optional(types.boolean, false),
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    setEndedByChanging(changed: boolean) {
      self.endedByChanging = changed
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type RecordType = Instance<typeof RecordModel>
export interface Record extends RecordType {}
type RecordSnapshotType = SnapshotOut<typeof RecordModel>
export interface RecordSnapshot extends RecordSnapshotType {}
