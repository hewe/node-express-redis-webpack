import person from './person';
import express from 'express';

const Routes = {
    init(app, redis) {
        app.use('/person', person(express.Router(), redis));
    }
};

export default Routes;