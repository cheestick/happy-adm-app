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

interface ISet {
  id: TDatabaseID
  status: 'busy' | 'idle' | 'prophylaxy'
  duration: number // minutes
  startTime: Date // hh:mm
  date: Date // yyyy:mm
}

type TUserType = 'super' | 'admin' | 'trainer' | 'rider'

interface IUser{
  id: TDatabaseID
  type: TUserType
}

interface IOrder {
  id: TDatabaseID
  set: ISet[]
}