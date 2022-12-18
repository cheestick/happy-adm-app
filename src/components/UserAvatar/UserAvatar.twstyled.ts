import tw from 'tailwind-styled-components'
import { TTrainerCurrentStatus } from './types'
import { TTrainingStatus } from './UserAvatar'

export const UserAvatarSection = tw.section`
  flex
  flex-col-reverse
  items-center
  gap-y-2

  relative

  mx-auto

  cursor-pointer

  backdrop-blur-sm
`

export const AvatarTitle = tw.h1`
  h-4
  
  font-semibold
  leading-none
  text-center
`

type AvatarPictureProps = {
  $dayoff: boolean
}

export const AvatarPicture = tw.img<AvatarPictureProps>`
  ${({ $dayoff = false }) => $dayoff ? 'saturate-0' : null }
  w-[65px]
  h-[65px]
  sm:w-[85px]
  sm:h-[85px]

  min-w-[65px]
  max-w-[85px]
  
  aspect-square
  
  rounded-full
  
  object-cover
  object-center

  bg-zinc-200
`

export const UserStatusNimbus = tw.div<AvatarPictureProps>`
  ${({ $dayoff = false }) => $dayoff ? 'border-transparent' :  'border-emerald-500/70' }
  p-1

  border-2 
  rounded-full

  bg-transparent
`


type TTrainingStatusBadgeProps = AvatarPictureProps & {
  $status: TTrainingStatus
}

const trainerCurrentStatusBadgeStyles: TTrainerCurrentStatus = {
  idle: 'before:content-["I"] bg-emerald-400 border-emerald-100',
  train: 'before:content-["T"] bg-red-400 border-red-100',
  operate: 'before:content-["P"] bg-amber-400 border-amber-100'
}

export const TrainingStatusBadge = tw.div<TTrainingStatusBadgeProps>`
  flex
  place-content-center
  
  absolute 

  w-5
  h-5

  aspect-square 
  
  border-2
  rounded-full 

  inset-x-3/4 
  inset-y-1 
  
  before:self-center
  before:text-[0.7rem]
  before:leading-none
  before:uppercase
  before:text-white

  ${({ $status, $dayoff = false }) => {
  const hasDayoff = $dayoff ? 'invisible' : ''
  
  // Ok, I solved this but did I get it?
  const status = $status.toLowerCase() as keyof TTrainerCurrentStatus
  
  return `${hasDayoff} ${trainerCurrentStatusBadgeStyles[status]}`
  }}

`

export const Divider = tw.div`
  w-1/3
  h-px
  
  bg-emerald-200
`