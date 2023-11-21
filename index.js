require('dotenv').config()

const server = require('./src/backend/server')

const port = process.env.PORT || 9000

server.listen(port, () => {
    console.log(`\n=== Server listening on localhost:${port} ===\n`)
})