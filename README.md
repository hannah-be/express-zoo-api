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

## Structure
- Create ``routes`` folder to store specific routes (server.js will also have to hold middleware). 
- Create ``tickets.js`` file with ``const express = require('express')`` creates a mini-server that we can attach our own routes to. 
- Create ``models`` folder to store data for each model and its CRUD methods and then require file in the relevant routes file.



