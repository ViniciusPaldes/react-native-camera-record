import { VideoItemModel, VideoItem } from "./video-item"

test("can be created", () => {
  const instance: VideoItem = VideoItemModel.create({})

  expect(instance).toBeTruthy()
})
