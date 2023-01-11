import React from "react";
import GooglePayButton from "@google-pay/button-react";
const Payment = () => {
  return (
    <div>
      <h1>click below to pay</h1>
      <hr />
      <GooglePayButton
        environment="TEST" //real card...code the integration fully
        paymentRequest={{
          //define your gpay versiions
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              //define suppported payment card networks
              type: "CARD",
              parameters: {
                //for authentication these are the methods which supported
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              //choose a payment tokenization method
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        //This method is called when a payment is authorized in the payment sheet.
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
      />
    </div>
  );
};

export default Payment;
