FROM node:10.16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

COPY . . 

RUN npm run-script build

EXPOSE 3000

CMD ["npm","run-script","start"]