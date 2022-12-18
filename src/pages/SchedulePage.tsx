import UserAvatar from '../components/UserAvatar'
import { trainingStatus } from '../components/UserAvatar/UserAvatar'
import { Section, Wrapper } from './SchedulePage.twstyled'

const SchedulePage = () => {
  
  return (
    <Section>
      
      <Wrapper>
        <div className='flex gap-6 my-3'>
          <UserAvatar trainerStatus={trainingStatus.OPERATE} />
          <UserAvatar trainerStatus={trainingStatus.TRAIN} />
          <UserAvatar trainerStatus={trainingStatus.IDLE} />
          <UserAvatar hasDayoff />
        </div>
      </Wrapper>

    </Section>
  )
}

export default SchedulePage