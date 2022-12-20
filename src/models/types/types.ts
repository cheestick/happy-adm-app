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
  status: 'busy' | 'idle' | 'prophylaxy' | 'empty'
  duration: number // minutes
  startTime: Date // hh:mm
  date: Date // yyyy:mm
  trainer: IUser
  riders: IUser[] // 1 or more riders/contacts
}

type TUserRole = 'super' | 'admin' | 'trainer' | 'rider'
type TUserName = string
type TNickName = string
type TUserContacts = {
  phone: string
  email: string
  telegram: string
}

export interface IUser{
  id: TDatabaseID
  role: TUserRole
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

//consider this

type TStringOrNumber = string | number

type TWorkDate = {
    year: TStringOrNumber
    month: TStringOrNumber
    day: TStringOrNumber
}

type TTime = {
  hours: TStringOrNumber // 5...22 for example
  minutes: TStringOrNumber // 0 | 30 
}

// considered implementing this entity to operate actual Set slot range
// needs to be displayed
export interface IWorkDay {
  id: TDatabaseID
  createdAt: Date
  updatedAt: Date
  workDate: TWorkDate
  from: TTime  // from 5.00 
  till: TTime  // till 21.00
  occupiedSlots: ISet[]  // list of full sets / set ids
  vacantSlots: ISet[]  // list of empty sets / set ids
}

/** timetable format ??
 *{ [startTime]: setID }
 * 
 * { 
 *  "09:00": "111-bbb-ccc-ddd-eee"
 *  "09:30": "222-bbb-ccc-ddd-eee"
 *  "10:30": "333-bbb-ccc-ddd-eee"
 *  "11:30": "444-bbb-ccc-ddd-eee"
 * }
 * */


