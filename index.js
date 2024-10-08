import express from 'express';
import routes from './src/routes/hrisRoutes.js'

const app = express();
const PORT = 3000; //or 4000

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);