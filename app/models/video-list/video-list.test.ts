import { VideoListModel, VideoList } from "./video-list"

test("can be created", () => {
  const instance: VideoList = VideoListModel.create({})

  expect(instance).toBeTruthy()
})
