const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('../routes/auth')
const contactRoutes = require('../routes/contactRoutes.js');
const skillRoutes = require("../routes/skillRoutes.js")
const funFactRoutes = require('../routes/funFactRoutes.js');
const projectRoutes = require('../routes/projectRoutes.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/funfacts', funFactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/',
    (req, res) => {
        res.send('Hello World!');
    }
)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
