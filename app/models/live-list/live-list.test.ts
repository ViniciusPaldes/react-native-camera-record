import { LiveListModel, LiveList } from "./live-list"

test("can be created", () => {
  const instance: LiveList = LiveListModel.create({})

  expect(instance).toBeTruthy()
})
