var obj = JSON.parse($response.body);

obj= {
  "purchases": [
    {
      "productId": "com.grailr.carrotWeather.newPremiumGold1year",
      "purchaseTime": "1656684710000",
      "originalPurchaseTime": "1656684711000",
      "expirationTime": "1657289510000",
      "in_app_ownership_type": "PURCHASED",
      "expirationReason": "0",
      "isInBillingRetryPeriod": "0",
	  "autoRenewStatus": "1",
	  "cancellationDate": "0"
    }
  ]
};

$done({body: JSON.stringify(obj)});
