import { ReactNode } from 'react'
import { Bar } from './TrainerBar.twstyled'

interface ITrainerBarProps {
  children: ReactNode
}

const TrainerBar = ({children}: ITrainerBarProps) => {
  return (
    <Bar>
      {children}
    </Bar>
  )
}

export default TrainerBar