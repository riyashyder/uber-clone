import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map'

const Confirm = () => {

    const getCoordinates = () => {
        const location = "Santa Monica";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hhdW52YW4xOTkiLCJhIjoiY2t6MXp0NDNnMXJmMTJubXdrdXhsZGlpdCJ9.uFoPZjNNgH8xWvJb1Hy_sw",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    useEffect(()=>{
        getCoordinates();

    }, [])

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

export default Confirm

const RideContainer = tw.div`
flex-1
`

const Wrapper = tw.div`
flex h-screen flex-col
`
