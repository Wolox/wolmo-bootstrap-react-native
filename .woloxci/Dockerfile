FROM node:12.10.0-alpine

WORKDIR /home/node

COPY package.json .

RUN yarn install
ENV PATH /home/node/node_modules/.bin:$PATH

WORKDIR /home/node/app
