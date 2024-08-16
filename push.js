const push = require('web-push');
let vapidKeys = {
    
        publicKey: 'BGaj-2wVNung__pDef8rChvu04JzUxVLPTNUNLDOc9JqLy_5en-s3U8SlydUIK1O18uUVJzFt14N2JBNWJVZ7QI',
        privateKey: '9_Qo3qMXRAJadB5rhCOwgGlvGZsH_Y1yePy30BL5e8E'
      
}
const payload = JSON.stringify({
    title: "Hello Aditya",
    des: "Where are you?",
  });
push.setVapidDetails('mailto:1mp22cs039.bgscet.ac.in',vapidKeys.publicKey,vapidKeys.privateKey);
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dL280fNwl2s:APA91bF1-da_ck4sZPOE79EChxR1HIIk0G92TLQlFEUbbPlhG-K4PNhJXZiv5-XwSn7zsn5ygMG0w6q9Lj7iXDHu0PuOqUMpMJnwIepi3WcMBcAarbWZbmBnSRdDKJNxnbh5C_a8Yrtz","expirationTime":null,"keys":{"p256dh":"BNzUxQ497p2Z0FN_Mham8DUsv8DgOHGbiqC7hYxPRCpIdbKKMM-28_d7i4eIoz7x75R_EIJ8U4E-1IbLTQTsMYM","auth":"aAmylu6BrSFSlN_0aS6zDA"}};
push.sendNotification(sub,payload);