import 'dotenv/config.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import authRoutes from './routes/User.Route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
    console.log(req.body);
    console.log(req.method);
    console.log(req.url);
    next();
})

app.use('/api/auth', authRoutes);

connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to the database", err);
});
