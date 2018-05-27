const http = require('http')

const PORT = 3000

let numOfRequests = 0

const requestHandler = (request, response) => {
  numOfRequests += 1;
  console.log(`Incoming Request: [${numOfRequests}] ${request.url}`)
  setTimeout(() => {
    response.end('data')
  }, 1600)
}

const server = http.createServer(requestHandler)

server.listen(PORT, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${PORT}`)
})
