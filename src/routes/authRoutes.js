
import { Router } from 'express';
const routes = Router()

// GET route
routes.get('/', (req, res) => {
    res.send('Server is running!');
});

export default routes


// after 50 min  con