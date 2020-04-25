import { RecordModel, Record } from "./record"

test("can be created", () => {
  const instance: Record = RecordModel.create({})

  expect(instance).toBeTruthy()
})
