# Interactive-Lab-Systems

> A Hackthebox styled MERN stack based attack box.

Users can sign up on ILS and choose one of the host-created rooms to try and hack into. They can launch boxes, which spawn Docker containers on the host, which they can then connect to via OpenVPN.

From there, they can send attacks and hack into the box. Their goal is to exfiltrate the flags from the box, which can mean finding hidden services, exploiting systems, or privilege escalating into root.

The server owner just needs to create vulnerable Docker images, and add them to the database for users to be able to hack into them.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

_Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org)._

### Setup

Before starting the setup for `client` and `server`, the OpenVPN Docker container system needs to be created first. Make sure the user you run the commands as is `root`, or is in the `docker` group!

Run the following setup commands to initialize the OpenVPN docker container:
```bash
OVPN_DATA="ovpn-data"
docker volume create --name $OVPN_DATA
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn ovpn_genconfig -u udp://vpn.example.com
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn touch /etc/openvpn/vars
docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn ovpn_initpki
```
Make sure to change `vpn.example.com` to either a domain name or IP which resolves to your server. Make sure to remember the password you used to create the Certificate Authority, as you will need to set it in `server`'s `.env` file. You can also change `OVPN_DATA`, but make sure you change it as well. 

Then, pull the necessary Docker images:
```bash
docker pull strellic/openvpn-client
```
After this, you should have created a Docker volume and have the OpenVPN Docker container up and running.
From there, follow the setup instructions in each of the folders.


## Built With

- [Node.JS](http://nodejs.org/) - Node.JS is used in the backend.
- [React.JS](https://reactjs.org/) -Frontend library used in the project.
- [NextJS Argon Dashboard](https://www.creative-tim.com/product/nextjs-argon-dashboard) - by Creative Tim, licensed under the MIT [LICENSE](LICENSE)


## License

This project is licensed under the MIT License.

