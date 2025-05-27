const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());

const mainRouter = require ('./routes/index.js');



app.use("/api/v1", mainRouter)
app.get('/', (req, res) => {
    res.send('Backend is running!');
});
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));