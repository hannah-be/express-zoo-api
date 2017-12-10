# Express.js framework for Node

## Setup
- ``yarn init``
- create `src` folder to holder `server.js` (convention)
- ``yarn add express`` to install express library
- create ``.gitignore`` folder and add `node_modules` - can do this manually or through the ``gitignore`` VSCode extension (CodeZombie)
- add express to server.js: ``const express = require('express')`` (require in the express library)
- create the server: ``const server = express()`` (create a new instance of the server)
- ``server.listen(port, () => {console.log('Started at http://localhost:port')})``
- ``yarn add nodemon --dev`` as a server manager
- Add scripts to package.json: ``"scripts": {"dev":"nodemon src/server.js"}`` to allow you to run the server from the terminal with ``yarn dev``
- 



