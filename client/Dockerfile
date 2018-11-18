FROM node:slim
MAINTAINER YX
ADD . /client
WORKDIR /client

RUN npm install
RUN npm install -g webpack
COPY package.json /client

EXPOSE 3000

COPY . /client
# CMD ["npm","run","start"]

