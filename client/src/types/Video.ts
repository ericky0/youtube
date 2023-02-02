type video = {
  data: any
  _id: string
  userId: string
  title: string
  desc: string
  imgUrl: string
  videoUrl: string
  views: number
  tags: string[]
  likes: string[]
  dislikes: string[]
  createdAt: Date
  updatedAt: Date
}

export type {video}