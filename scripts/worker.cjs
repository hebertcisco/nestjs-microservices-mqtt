#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv/config');

const mqtt = require('mqtt');
const client = mqtt.connect(process.env.MQTT_URL);

client.on('connect', () => {
    client.subscribe('math-topic', (err) => {
        if (!err) {
            client.publish(
                'math-topic',
                JSON.stringify({ a: 5, b: 3, operation: 'add' }),
            );
            console.log('Message sent');
            return 0;
        }
        console.error('Error', err);
        return 1;
    });
});
