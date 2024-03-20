const Express = require('express');
const BodyParser = require('body-parser');
const app = Express();

app.use(Express.json({limit: '50mb'}));
app.use(Express.urlencoded({limit: '50mb', extended: true}));
app.use(BodyParser.text());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    if ('OPTIONS' == req.method) {
        res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
        return res.sendStatus(200);
    }
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to SammMap Api');
});

app.get('/points', (req, res) => {
    const points = [
        {lat: 40.836930920075005, lng: 29.42568684290308},
        {lat: 40.834544433412056, lng: 29.429906907495496},
        {lat: 40.833164452944644, lng: 29.433322665763768},
        {lat: 40.83584321231875, lng: 29.439198175840158},
        {lat: 40.835406906617855, lng: 29.440390444616625},
        {lat: 40.84076210674119, lng: 29.440363111340105},
        {lat: 40.84236919115229, lng: 29.436086452193962}
    ];
    res.send(points);
});

server = app.listen(3000, () => {
    console.log("API working on port", 3000);
}).on('error', (err) => {
    console.error(err.message);
});
