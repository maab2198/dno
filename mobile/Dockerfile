FROM node:slim
MAINTAINER YX
ADD . /mobile
WORKDIR /mobile
RUN npm install -g expo-cli
RUN npm install 

COPY package.json /mobile

EXPOSE 9000

COPY . /mobile
# CMD ["npm","run","start"]

