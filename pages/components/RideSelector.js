// import React, {useEffect, useState} from 'react'
// import tw from "tailwind-styled-components"
// import { carList } from '../data/carList'

// const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
//     const [rideDuration, setRideDuration] = useState(0);

//     const getDirections = (pickupCoordinates, dropoffCoordinates) => {
//         fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
//             new URLSearchParams({
//                 access_token: 'pk.eyJ1Ijoic2hhdW52YW4xOTkiLCJhIjoiY2t6MXp0NDNnMXJmMTJubXdrdXhsZGlpdCJ9.uFoPZjNNgH8xWvJb1Hy_sw'
//             })
//         )
//         .then((response) => {
//             return response.json();
//         })
//         .then(data => {
//             setRideDuration(data.routes[0].duration / 100)
//         });
//     }

//     useEffect(() => {
//         if(pickupCoordinates && dropoffCoordinates) {
//             getDirections(pickupCoordinates, dropoffCoordinates)
//         }
//     }, [pickupCoordinates, dropoffCoordinates])

//     return (
//         <Wrapper>
//             <Title>Choos a ride, or swipe up for more</Title>
//             <CarList>
//                 {carList.map((car, index) => (
//                 <Car key={index}>
//                     <CarImage src={car.imgUrl} />
//                     <CarDetails>
//                         <Service>{car.service}</Service>
//                         <Time>5 min away</Time>
//                     </CarDetails>
//                     <Price>{'$'+ (rideDuration * car.multiplier).toFixed(2)}</Price>
//                 </Car>
//                 ))}

//             </CarList>
//         </Wrapper>
//     )
// }

// export default RideSelector

// const Wrapper = tw.div`
// flex-1 overflow-y-scroll flex flex-col
// `

// const Title = tw.div`
// text-gray-500 text-center text-xs py-2 border-b
// `

// const CarList = tw.div`
// overflow-y-scroll
// `

// const Car = tw.div`
// flex p-4 items-center
// `

// const CarImage = tw.img`
// h-14 mr-4
// `

// const CarDetails = tw.div`
// flex-1
// `

// const Service = tw.div`
// font-medium
// `

// const Time = tw.div`
// text-xs text-blue-500
// `

// const Price = tw.div`
// text-sm
// `



import React, { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import { carList } from '../data/carList';

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
    const [rideDuration, setRideDuration] = useState(0);

    const getDirections = (pickupCoordinates, dropoffCoordinates) => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1Ijoic2hhdW52YW4xOTkiLCJhIjoiY2t6MXp0NDNnMXJmMTJubXdrdXhsZGlpdCJ9.uFoPZjNNgH8xWvJb1Hy_sw'
            })
        )
        .then((response) => {
            return response.json();
        })
        .then(data => {
            // Check if routes exist and if the first route has a duration
            if (data.routes && data.routes.length > 0 && data.routes[0].duration) {
                setRideDuration(data.routes[0].duration / 100);
            } else {
                // If there are no routes or duration, set rideDuration to 0 or any default value
                setRideDuration(0);
            }
        })
        .catch(error => {
            // Handle API call errors here
            console.error('Error fetching directions:', error);
            // Set rideDuration to 0 or any default value in case of error
            setRideDuration(0);
        });
    }

    useEffect(() => {
        if (pickupCoordinates && dropoffCoordinates) {
            getDirections(pickupCoordinates, dropoffCoordinates);
        }
    }, [pickupCoordinates, dropoffCoordinates]);

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                {carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>{'$'+ (rideDuration * car.multiplier).toFixed(2)}</Price>
                    </Car>
                ))}
            </CarList>
        </Wrapper>
    )
}


export default RideSelector;

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
overflow-y-scroll
`

const Car = tw.div`
flex p-4 items-center
`

const CarImage = tw.img`
h-14 mr-4
`

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500
`

const Price = tw.div`
text-sm
` 
