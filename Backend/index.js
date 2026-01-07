const express = require('express');
const cors = require('cors');
const xmlRoutes = require('./src/routes/xmlRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api/xml", xmlRoutes);


app.get('/', (req, res) => {
    res.send('server is running....');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});