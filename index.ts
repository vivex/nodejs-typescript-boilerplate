import express from 'express';

import {WelcomeController} from './controllers';

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: any = process.env.PORT || 3000;


// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);


// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});