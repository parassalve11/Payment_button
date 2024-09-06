'use client'
import GooglePayButton from "@google-pay/button-react";


export default function Page() {
  return (
   <div className="h-screen flex flex-col items-center gap-3 mt-4">
    <h1 className="text-3xl font-bold text-muted-foreground ">Online Payment Gateway</h1>
    <hr  className="w-full"/>
   <div>
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
            allowedCardNetworks: ['MASTERCARD', 'VISA','AMEX'],
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
        totalPrice: '100.00',
        currencyCode: 'USD',
        countryCode: 'US',
      },
    shippingAddressRequired:true,
    callbackIntents:['SHIPPING_ADDRESS','PAYMENT_AUTHORIZATION'],
    }}
    onLoadPaymentData={paymentRequest => {
      console.log('load payment data', paymentRequest);
    }
  }
  onPaymentAuthorized={paymentData =>{
    console.log('Payment Authorized success',paymentData);
    return{transactionState:'SUCCESS'}
  }}
  onPaymentDataChanged={paymentData =>{
    console.log('OnPayment data Changed',paymentData);
    return{}
  }}
    
    buttonColor="black"
    buttonType="buy"
  />
   </div>
   </div>
  )
}