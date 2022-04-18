export interface IUser {
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  birthYear: Date | String,
}

export interface ICivciv {
  text: String,
  writer: IUser,
  likes: IUser [],
  replies: ICivciv [],
  replyTo: ICivciv,
  reCivciv: IUser []
}
