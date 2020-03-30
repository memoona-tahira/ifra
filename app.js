const express = require('express')
const app = express()
const port = 3501

app.use(express.static('staticz'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))