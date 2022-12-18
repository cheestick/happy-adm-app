import tw from 'tailwind-styled-components'

export const Section = tw.section`
  grid
  grid-cols-[auto_1fr_auto]
  place-content-center
  
  w-full
  h-full
  
  bg-gradient-to-r from-cyan-500 to-blue-500
`
export const Wrapper = tw.div`
  col-start-2
  mx-auto
`