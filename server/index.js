import express from 'express';
import parsed from 'body-parser';
import router from './routes';

const app = express();

app.use(parsed.json());
//versioning
app.use('/api/v1', router);

app.listen(process.env.PORT || 3400);

export default app;