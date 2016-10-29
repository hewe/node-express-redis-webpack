import Person from '../model/Person';
export default function (router, redis) {
    const getPerson = (req, res) => {
        const key = `${req.query.firstname}.${req.query.lastname}`;
        redis.get(key)
            .then((result) => {
                res.send(JSON.parse(result));
            })
            .catch((error) => {
                res.status(500).send('something broke');
            })
    };

    const setPerson = (req, res) => {
        const key = `${req.body.firstname}.${req.body.lastname}`;
        const person = new Person(req.body.firstname, req.body.lastname, req.body.age);
        redis.set(key, JSON.stringify(person))
            .then((result) => {
                res.send(person);
            })
            .catch((error) => {
                res.status(500).send('something broke');
            })
    };

    router.get('', getPerson);
    router.post('', setPerson);

    return router;
}