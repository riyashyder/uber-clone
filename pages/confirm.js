import React from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map'

const confirm = () => {
  return (
  
  <Wrapper>
     <Map/>
     <RideContainer>
     Ride Selector
     Confirm Ride
     </RideContainer>
  </Wrapper>
  )
}

export default confirm

const RideContainer = tw.div`
flex-1
`

const Wrapper = tw.div`
flex h-screen flex-col
`
