import tw from "tailwind-styled-components"

export const Hero = tw.section`
  flex
  place-content-center
  min-w-full
  min-h-[30vh]
  bg-lime-50
`

interface WrapperProps {
  $center?: boolean
}

export const Wrapper = tw.div<WrapperProps>`
  ${ ({ $center }) => $center
    ? 'flex place-content-center flex-col'
    : 'block' 
  }
  min-w-[calc(100vw-2rem)]
  mx-auto
  min-h-full
`

export const MainHeading = tw.h1`
  text-8xl
  underline
  font-bold
  font-['Helvetica']
  
  text-center
  align-middle



  last:-mt-[5.8rem]
  last:-ml-3

  last:text-indigo-300
  hover:last:text-indigo-400

  text-indigo-200
  hover:text-indigo-300

  select-none
`