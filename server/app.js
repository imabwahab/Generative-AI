import express from 'express';
import 'dotenv/config'
import generateContentRouter from './routes/generateContentRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// Routes

app.get('/', (req, res) => {
  res.send(' GAP AI backend. ');
});

app.use('/api', generateContentRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

