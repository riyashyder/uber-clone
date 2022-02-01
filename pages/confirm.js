import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import Map from './components/Map'

const Confirm = () => {

    const getPickupCoordinates = () => {
        const pickup = "Santa Monica";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hhdW52YW4xOTkiLCJhIjoiY2t6MXp0NDNnMXJmMTJubXdrdXhsZGlpdCJ9.uFoPZjNNgH8xWvJb1Hy_sw",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log(data.features[0].center)
        })
    }

    const getDropofCoordinates = () => {
        const dropoff = "Los Angeles";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hhdW52YW4xOTkiLCJhIjoiY2t6MXp0NDNnMXJmMTJubXdrdXhsZGlpdCJ9.uFoPZjNNgH8xWvJb1Hy_sw",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            console.log("Dropoff")
            console.log(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCoordinates();
        getDropofCoordinates();

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
