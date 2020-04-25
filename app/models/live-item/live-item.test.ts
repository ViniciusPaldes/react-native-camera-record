import { LiveItemModel, LiveItem } from "./live-item"

test("can be created", () => {
  const instance: LiveItem = LiveItemModel.create({})

  expect(instance).toBeTruthy()
})
