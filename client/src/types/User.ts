type user = {
  _id: string,
  name: string,
  email: string,
  password: string,
  img?: string,
  subscribers: number,
  subscribedUsers: [string],
  createdAt: Date,
  updatedAt: Date,
  _doc: any
}

export type { user }