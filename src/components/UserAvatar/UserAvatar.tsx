import { useFetchUsers } from '../../hooks/useFetchUsers'
import { AvatarPicture, AvatarTitle, TrainingStatusBadge, UserAvatarSection, UserStatusNimbus } from './UserAvatar.twstyled'

const avatarSize = {
  sm: 65,
  lg: 85,
} as const

export type TTrainingStatus = 'train' | 'operate' | 'idle'

interface IUserAvatar {
  hasDayoff?: boolean
  trainingStatus?: TTrainingStatus
}

const UserAvatar = ({hasDayoff = false, trainingStatus = 'idle'}: IUserAvatar) => {
  const [user] = useFetchUsers()
  return (
    <UserAvatarSection>
      <AvatarTitle>{user?.name?.first}</AvatarTitle>
      <UserStatusNimbus>
        <AvatarPicture
          width={avatarSize.sm} height={avatarSize.sm}
          src={user?.picture?.medium}
          alt={user ? `${user?.name?.first} photo` : ''}
          dayoff={hasDayoff}
        />
      </UserStatusNimbus>
      <TrainingStatusBadge status={trainingStatus} />
    </UserAvatarSection>
  )
}

export default UserAvatar