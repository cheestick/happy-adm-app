import tw from 'tailwind-styled-components'

export const Bar = tw.section`
  flex 
  gap-6 
  
  my-3

  px-8
  py-5

  rounded-l-full
  rounded-r-full
  border-2
  border-slate-200/50

  overflow-hidden
  overflow-x-auto
  sm:overflow-x-hidden
  snap-mandatory
  snap-x

  bg-white/30
  backdrop-blur-md
  shadow-lg
`