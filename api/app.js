const express = require('express')
const app = express()
const db = require('./config/database')
var cors = require('cors')
const budgetRoutes = require('./routes/budgetRoutes')
const reserveRoutes = require('./routes/reserveRoutes')

// Connect to the database
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.error('Error connecting to database:', err))

 // Middleware to parse JSON requests
app.use(express.json())

// Middleware to enable CORS
app.use(cors())

// Routes
app.use('/budgets', budgetRoutes);
app.use('/reserves', reserveRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});