import tw from 'tailwind-styled-components'
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
  font-semibold
  leading-none
  text-center

  h-4
`

type AvatarPictureProps = {
  dayoff: boolean
}

export const AvatarPicture = tw.img<AvatarPictureProps>`
  ${({ dayoff }) => dayoff ? 'saturate-0' : null }
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

export const UserStatusNimbus = tw.div`
  p-1

  border-2 
  rounded-full 
  border-emerald-500/70

  bg-transparent
`

type TTrainingStatusBadgeProps = {
  status: TTrainingStatus
}

const trainingStatusBadgeStylesConfig: { [key:string]: string } = {
  idle: 'before:content-["I"]',
  train: 'before:content-["T"]',
  operate: 'before:content-["P"]'
}

export const TrainingStatusBadge = tw.div<TTrainingStatusBadgeProps>`
  ${({ status }) => trainingStatusBadgeStylesConfig[status]}

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

  bg-stone-400
  
  before:self-center
  before:text-[0.7rem]
  before:leading-none
  before:uppercase
  before:text-white
`

export const Divider = tw.div`
  w-1/3
  h-px
  
  bg-emerald-200
`