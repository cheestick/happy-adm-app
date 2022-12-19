type TCableType = Uppercase<'obstacles' | 'flat'>
type TDatabaseID = string
type TCableTitle = string
type TSignboard = string

export interface ICableLine {
  id: TDatabaseID
  spotSignboard: TSignboard
  title: TCableTitle
  type: TCableType
}

export interface ISet {
  id: TDatabaseID
  status: 'busy' | 'idle' | 'prophylaxy'
  duration: number // minutes
  startTime: Date // hh:mm
  date: Date // yyyy:mm
  trainer: IUser
  riders: IUser[] // 1 or more riders/contacts
}

type TUserType = 'super' | 'admin' | 'trainer' | 'rider'
type TUserName = string
type TNickName = string
type TUserContacts = {
  phone: string
  email: string
  telegram: string
}

export interface IUser{
  id: TDatabaseID
  type: TUserType
  username: TUserName
  nickname: TNickName
  contacts: TUserContacts
}

export interface IOrder {
  id: TDatabaseID
  set: ISet[]
}

export type TActivityType =
  | 'wake'
  | 'trip'
  | 'snowboarding'
  | 'skateboarding'
  | 'trampoline'
  | 'contest'
  | 'yoga'