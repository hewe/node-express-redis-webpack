import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Routes from './routes/'
import Redis from 'ioredis';

const redisHost = process.env.REDIS_HOST || 'localhost';
const expressPort = process.env.EXPRESS_PORT || '3000';
const myRedis = new Redis({
    host: redisHost
});
console.log(`Connecting to redis on host: ${redisHost}`);
const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

Routes.init(app, myRedis);

app.listen(expressPort, function(){
        console.log('Express app started!');
    }
);
