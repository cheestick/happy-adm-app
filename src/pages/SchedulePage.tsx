import TrainerBar from '../components/TrainerBar'
import UserAvatar from '../components/UserAvatar'
import { trainingStatus } from '../components/UserAvatar/UserAvatar'
import { Section, Wrapper } from './SchedulePage.twstyled'

const SchedulePage = () => {
  
  return (
    <Section>
      
      <Wrapper>
        <TrainerBar>
          <UserAvatar trainerStatus={trainingStatus.OPERATE} />
          <UserAvatar trainerStatus={trainingStatus.TRAIN} />
          <UserAvatar trainerStatus={trainingStatus.IDLE} />
          <UserAvatar hasDayoff />
        </TrainerBar>
      </Wrapper>

    </Section>
  )
}

export default SchedulePage