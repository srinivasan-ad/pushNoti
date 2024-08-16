const push = require('web-push');
let vapidKeys = {
    
        publicKey: 'BGaj-2wVNung__pDef8rChvu04JzUxVLPTNUNLDOc9JqLy_5en-s3U8SlydUIK1O18uUVJzFt14N2JBNWJVZ7QI',
        privateKey: '9_Qo3qMXRAJadB5rhCOwgGlvGZsH_Y1yePy30BL5e8E'
      
}
push.setVapidDetails('mailto : 1mp22cs039@bgscet.ac.in',vapidKeys.publicKey,vapidKeys.privateKey);
let sub = {};
push.sendNotification(sub,'test message');