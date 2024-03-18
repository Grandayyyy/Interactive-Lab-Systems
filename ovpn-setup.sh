OVPN_DATA="ovpn-data-ILS"
# docker pull kylemanna/openvpn
docker volume create --name $OVPN_DATA
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn ovpn_genconfig -u udp://localhost
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn touch /etc/openvpn/vars

echo "Do remember the password you create in the next step and add it as a environment variable in server's .env file."
docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn ovpn_initpki

# docker pull strellic/openvpn-client