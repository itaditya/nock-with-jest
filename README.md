## A simple demo to showoff Nock usage with Jest

## Explainer

1. **index.js** is a module which sends requests to the server and this module has to be tested.
1. **server.js** is used to create a server which responds with a delay of 1600 ms.
1. **test/withoutnock.test.js** contains test which when run, lets the module send actual requests to server.
1. **test/withnock.test.js** contains test which when run, intercepts the request made by the module.

## How To Run

1. Open server using `npm run server`.
1. Run tests in watch mode using `npm run test:watch`.

## What to make of it

1. When you run the tests you'll notice that **withoutnock.test.js** takes around 1600 ms to complete
1. However, **withnock.test.js** takes around 5 ms only.
1. Also if you monitor the server logs, they will show that only one request was received by the server when the tests were run.
1. All this happens because in **withnock.test.js** nock intercepts the requests and don't actually send the request to server, hence don't wait 1600 ms for the server to respond.
