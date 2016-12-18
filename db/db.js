import redis from 'redis';
import Promise from 'bluebird';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

let redisClient;

const MODE_TEST = 'MODE_TEST',
    MODE_PRODUCTION = 'MODE_PRODUCTION';

function connect(mode) {
    if (mode === MODE_PRODUCTION) {
        redisClient = redis.createClient();
    }
    if (mode === MODE_TEST) {
        redisClient = redis.createClient({ db: 15 });
    }
}

function client() {
    return redisClient;
}

function error(err) {
    console.log('Database error:' + err.message);
}

export default {
    MODE_TEST,
    MODE_PRODUCTION,
    connect,
    client,
    error
}