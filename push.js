const push = require("web-push");
// const express = require("express")
// const path = require('path');
// const app = express();
// app.use(express.json());
// app.use(express.static(path.join(__dirname,'/')));

let vapidKeys = {
  publicKey:
  "BGaj-2wVNung__pDef8rChvu04JzUxVLPTNUNLDOc9JqLy_5en-s3U8SlydUIK1O18uUVJzFt14N2JBNWJVZ7QI",
  privateKey: "9_Qo3qMXRAJadB5rhCOwgGlvGZsH_Y1yePy30BL5e8E",
};
const payload = JSON.stringify({
  title: "Namaste universe !",
  body: "I am in :)",
});
push.setVapidDetails(
  "mailto:1mp22cs039.bgscet.ac.in",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
// let sub ;
// app.post('/',(req,res) => {
//   sub =  req.body;
//   push.sendNotification(sub, payload).then(() => console.log('Notification sent successfully !'))
//   return res.status(201).json({
//     message : 'sucess',
//   });
// })
// My phone -> {
  //   endpoint:
  //     "https://fcm.googleapis.com/fcm/send/f2TAQxx9mvo:APA91bG7Y8lvyS6YBcC5LNFjOvm8hxh0hPULiKVeUnUbL-4DEDOqhAJgWBnYrFrWys10pyFc7E4lhrutweUf6O4H9ZX5pc5u_anak1humuuWoLXzvVQln6J_o3jmmewfW__d_f1TPhiJ",
  //   expirationTime: null,
  //   keys: {
    //     p256dh:
    //       "BD8-tYd_RsFjukb8-YM5-uI8DwrUJyAgFFdSSfo45DEEvj4pJzxzp0uo0kT6-fcy5mUCxgNOT1CronGBGvyqcWo",
    //     auth: "kNQ9hhJ5PhIVC2g_Vjl3fg",
    //   },
    // };
    const sub =  {
        endpoint:
          "https://fcm.googleapis.com/fcm/send/f2TAQxx9mvo:APA91bG7Y8lvyS6YBcC5LNFjOvm8hxh0hPULiKVeUnUbL-4DEDOqhAJgWBnYrFrWys10pyFc7E4lhrutweUf6O4H9ZX5pc5u_anak1humuuWoLXzvVQln6J_o3jmmewfW__d_f1TPhiJ",
        expirationTime: null,
        keys: {
            p256dh:
              "BD8-tYd_RsFjukb8-YM5-uI8DwrUJyAgFFdSSfo45DEEvj4pJzxzp0uo0kT6-fcy5mUCxgNOT1CronGBGvyqcWo",
            auth: "kNQ9hhJ5PhIVC2g_Vjl3fg",
          },
        };
    push.sendNotification(sub, payload).then(() => console.log('Notification sent successfully !'))
    // app.listen(9000,()=>console.log('server started at port http://localhost:9000'));