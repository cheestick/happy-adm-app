import type { TTrainingStatus } from './UserAvatar';

type TStyleConfig  = string

export type TTrainerCurrentStatus = Record<Lowercase<TTrainingStatus>, TStyleConfig>

//type TTrainerCurrentStatus = TUnionKeysToObject<TTrainingStatus, TStyleConfig>

export type TConstTrainingStatusObject = {
  [Property in TTrainingStatus]: Property
}