require('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())


const PORT = 5001

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})

