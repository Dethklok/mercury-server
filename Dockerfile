FROM node:10-alpine

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 3000
