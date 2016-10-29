import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Routes from './routes/'
import Redis from 'ioredis';

const myRedis = new Redis();

const app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

Routes.init(app, myRedis);

app.listen(3000, function(){
        console.log('Express app started!');
    }
);
