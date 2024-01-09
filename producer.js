const { Queue } = require('bullmq');

const notificationQueue = new Queue('email-queue');

async function init(){
    const res = await notificationQueue.add('email to sunny', {
        email: 'sunnybhagwat35@gmail.com',
        subject: "Welcome",
        body: 'hey there',
    });
    console.log('job added to queue', res.id); 

}

init();