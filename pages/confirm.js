import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import GooglePayButton from '@google-pay/button-react';
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    const {pickup, dropoff} = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGVyZWtzYXJnZW50IiwiYSI6ImNrdnNjNGZ6bTAwODMydnA5NGlhdGhqZzQifQ.8ZHb1XyhLk84WdehUiG57w",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            //console.log("Pickup")
            setPickupCoordinates(data.features[0].center);
        })
    }


    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hhdW52YW4xOTkiLCJhIjoiY2t6MXp0NDNnMXJmMTJubXdrdXhsZGlpdCJ9.uFoPZjNNgH8xWvJb1Hy_sw",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            //console.log("Dropoff")
            setDropoffCoordinates(data.features[0].center);
        })
    }

        useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup,dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/search">
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>

            </ButtonContainer>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                    <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      />
                    
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white text-center my-4 mx-4 py-4 text-xl
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain
`


