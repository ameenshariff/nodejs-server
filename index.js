const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
})