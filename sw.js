self.addEventListener('push', (e) => {
    let data = e.data ? e.data.json() : {};

    let options = {
        body: data.body || "This notification was generated from a push :) !",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2',
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore this new world!',
            },
            {
                action: 'close',
                title: 'Close',
            }
        ]
    };
    e.waitUntil(
        self.registration.showNotification(data.title || 'Namaste universe', options)
    );
});
