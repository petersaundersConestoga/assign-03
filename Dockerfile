# followed from here https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# pull base image
# 16 means use lts
FROM node:16

# create app directory
WORKDIR /usr/src/app

# install app depends
COPY package*.json ./

RUN npm install

# bundle app source 
COPY . .

EXPOSE 3000 

RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build"]
