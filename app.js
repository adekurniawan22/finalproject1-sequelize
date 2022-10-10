const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const UserController = require('./controller/User');

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/v1', (req, res) => {
    res.render('index');
})
app.post('/api/v1/users/register', UserController.register);
app.post('/api/v1/users/login', UserController.login);

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}/api/v1`);
})