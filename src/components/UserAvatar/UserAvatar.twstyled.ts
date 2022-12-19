import tw from 'tailwind-styled-components'
import { TTrainerCurrentStatus } from './types'
import { TTrainingStatus } from './UserAvatar'

export const UserAvatarSection = tw.section`
  flex
  flex-col-reverse
  items-center
  gap-y-1

  relative

  mx-auto

  cursor-pointer
  group
`

export const AvatarTitle = tw.h1`
  rounded-full

  max-w-[11ch]
  min-w-[4ch]
  h-5

  -mt-4
  px-2.5
  py-1
  
  z-10
  
  bg-white/40
  backdrop-blur-md

  overflow-hidden
  overflow-ellipsis

  break-keep
  whitespace-nowrap
  text-xs
  text-center
  font-semibold
  leading-none

  transition-colors
  group-hover:bg-white/80
  group-hover:shadow-lg
`

type AvatarPictureProps = {
  $dayoff: boolean
}

export const AvatarPicture = tw.img<AvatarPictureProps>`
  ${({ $dayoff = false }) => $dayoff ? 'saturate-0' : null }
  w-[65px]
  h-[65px]
  sm:w-[65px]
  sm:h-[65px]

  min-w-[65px]
  max-w-[65px]
  
  aspect-square
  
  rounded-full
  
  object-cover
  object-center

  bg-zinc-200

  
  transition-all
  group-hover:shadow-lg
  group-hover:scale-110
`

export const UserStatusNimbus = tw.div<AvatarPictureProps>`
  p-0.5

  border-4
  rounded-full

  bg-transparent

  ${({ $dayoff = false }) => $dayoff
    ? 'border-white/20'
    : 'border-green-400' }
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

  w-[1.15rem]
  h-[1.15rem]

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

  transition-all
  group-hover:scale-75

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