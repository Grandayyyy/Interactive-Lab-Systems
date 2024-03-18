# Server
The back-end of the webapp.
Built using Express and Dockerode.

## Setup
1. `npm install`
2. Create a .env file in this directory, and set the values according to the example below.
Example:
```
PORT=8000
MONGO_USER=mongo_user
MONGO_PASS=mongo_pass
MONGO_IP=127.0.0.1:27017
MONGO_DBNAME=mongo_dbname
JWT_SECRET=jwt_secret
BOX_DURATION=60
ORIGIN=https://example.com  #for cors where client is running.
OPENVPN_CA_PASS=ca_pass
OPENVPN_VOLUME=ovpn-data
OPENVPN_SERVER=vpn.example.com
ENABLE_GOTTY=true
GOTTY_PORT=8001
GOTTY_URL=http://localhost:8001
```

3. Run `npm start` to start the API server.
