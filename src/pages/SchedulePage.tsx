import UserAvatar from '../components/UserAvatar'
import { Section, Wrapper } from './SchedulePage.twstyled'

const SchedulePage = () => {
  
  return (
    <Section>
      
      <Wrapper>
        <div className='flex gap-6 my-3'>
          <UserAvatar trainingStatus='operate'/>
          <UserAvatar trainingStatus='train'/>
          <UserAvatar hasDayoff/>
        </div>
      </Wrapper>

    </Section>
  )
}

export default SchedulePage