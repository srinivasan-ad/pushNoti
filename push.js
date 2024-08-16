const push = require('web-push');
let vapidKeys = {
    
        publicKey: 'BGaj-2wVNung__pDef8rChvu04JzUxVLPTNUNLDOc9JqLy_5en-s3U8SlydUIK1O18uUVJzFt14N2JBNWJVZ7QI',
        privateKey: '9_Qo3qMXRAJadB5rhCOwgGlvGZsH_Y1yePy30BL5e8E'
      
}
const payload = JSON.stringify({
    title: "Namaste universe !",
    body: "I am in :)",
  });
push.setVapidDetails('mailto:1mp22cs039.bgscet.ac.in',vapidKeys.publicKey,vapidKeys.privateKey);
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dRbUtFHUvMs:APA91bEKLU_pMb8hWXyTKxdFp8OVdkM5YHdapnuUha_9fl3s26wLM-nAXjc7beoew9ozpc3_cZUGeEuLBs6nUMZYiviqgJRIt5yd5sZQlrpTO6NhsY2RsqjljqV7WGSvtyWb4wyT4WUx","expirationTime":null,"keys":{"p256dh":"BL7W4c43O1hA15_Xs372g21SBXFi1XM2iFfXxw7d4fMVO9keSFGUmojN0zDlRc1MV9h1PU9hPwwQFw3df3T3b3k","auth":"Y5iwpbCkWrjpsW-_ZFCpHg"}}
push.sendNotification(sub,payload);