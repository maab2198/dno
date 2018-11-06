FROM node:slim
MAINTAINER YX
ADD . /client
WORKDIR /client

RUN npm install -g webpack
COPY package.json /client


RUN npm install
COPY . /client
# CMD ["npm","run","start"]

