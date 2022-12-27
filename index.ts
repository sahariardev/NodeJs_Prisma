import * as dotEnv from 'dotenv';
import app from './server'

dotEnv.config();
app.listen(3000, () => {
    console.log('Running application from 3000 port');
});