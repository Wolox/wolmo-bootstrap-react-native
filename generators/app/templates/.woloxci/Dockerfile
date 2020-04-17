FROM node:10.11.0-alpine

WORKDIR /home/node

COPY package.json .

RUN yarn install
ENV PATH /home/node/node_modules/.bin:$PATH

WORKDIR /home/node/app
