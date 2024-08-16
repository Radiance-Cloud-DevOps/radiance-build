import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connect } from 'mongoose';
import router from './routes/UserRoutes.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://3.144.190.190:3000' }));

// Connect to MongoDB
connect('mongodb+srv://radiancecd:Radiance0223@cluster0.2s6vl9v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/api/users', router);

// Default route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the server!!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
