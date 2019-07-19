FROM node:alpine

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn config set strict-ssl false
RUN yarn

COPY . ./

EXPOSE 3000

CMD node index.js