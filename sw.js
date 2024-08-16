self.addEventListener('push',(e) => {
    let options = {
        body : "This notification was generated from a push :) !",
        vibrate : [100,50,100],
        data : {
dateOfArrival : Date.now(),
primaryKey : '2'
        },
        actions :[ {
action : 'explore',
title : 'Explore this new world !',
},
{action:'close',title : 'Close'}]
    };
    e.waitUntil(self.registration.sendNotification('Namaste universe' , options));
});