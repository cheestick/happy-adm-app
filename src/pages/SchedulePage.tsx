import { useFetchUsers } from '../hooks/useFetchUsers'
import { Section, Wrapper } from './SchedulePage.twstyled'

const SchedulePage = () => {
  const [user] = useFetchUsers()
  
  return (
    <Section>
      
        <Wrapper>
          <h1>{user?.name?.first}</h1>
          <img src={user?.picture?.large} alt={`${user?.name?.first} photo`} />
        </Wrapper>

    </Section>
  )
}

export default SchedulePage