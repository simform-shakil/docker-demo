import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health-check', (req: Request, res: Response) => {
  res.status(200).send('Server is running 🚀');
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello!! from container 🌳 ');
});

app.listen(PORT, () => console.log('Server is running on PORT: ', PORT));
