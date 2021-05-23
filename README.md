## Node.js pm2 management test

### Development

```bash
cd <project-folder>

# intsall dependencies
yarn

# run the server
yarn start server.js

# run the server through pm2 as fork
yarn pm2 start server.js

# stop & delete the server sample through pm2
yarn pm2 delete server.js

# run the server through pm2 as cluster using max CPUs available
yarn pm2 start server.js -i max

# run the server through pm2 as cluster using max CPUs available
# ecosystem config
yarn pm2 start ecosystem.config.js
```
