FROM node:alpine

ENV http_proxy=http://172.18.16.1:3128
ENV https_proxy=http://172.18.16.1:3128


WORKDIR /usr/app

COPY package*.json ./
RUN yarn config set strict-ssl false
RUN yarn

COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]