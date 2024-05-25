const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (request, response) => {
   response.json({
      message: "Kodemia API v1"
   })
})

module.exports = { 
   server: server 
};