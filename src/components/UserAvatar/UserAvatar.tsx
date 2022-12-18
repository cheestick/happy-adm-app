import { useFetchUsers } from '../../hooks/useFetchUsers'
import { TConstTrainingStatusObject } from './types'
import { AvatarPicture, AvatarTitle, TrainingStatusBadge, UserAvatarSection, UserStatusNimbus } from './UserAvatar.twstyled'

const avatarSize = {
  sm: 65,
  lg: 85,
} as const

export type TTrainingStatus = Uppercase<'train' | 'operate' | 'idle'>

export const trainingStatus: TConstTrainingStatusObject = {
  IDLE: 'IDLE',
  TRAIN: 'TRAIN',
  OPERATE: 'OPERATE',
}

interface IUserAvatar {
  hasDayoff?: boolean
  trainerStatus?: TTrainingStatus
}

const UserAvatar = ({hasDayoff = false, trainerStatus = trainingStatus.IDLE}: IUserAvatar) => {
  const [user] = useFetchUsers()
  return (
    <UserAvatarSection>
      <AvatarTitle>{user?.name?.first}</AvatarTitle>
      <UserStatusNimbus $dayoff={hasDayoff}>
        <AvatarPicture
          width={avatarSize.sm} height={avatarSize.sm}
          src={user?.picture?.medium}
          alt={user ? `${user?.name?.first} photo` : ''}
          $dayoff={hasDayoff}
        />
      </UserStatusNimbus>
      <TrainingStatusBadge $status={trainerStatus} $dayoff={hasDayoff} />
    </UserAvatarSection>
  )
}

export default UserAvatar