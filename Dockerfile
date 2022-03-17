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

# expose the port we want
EXPOSE 3000 

# build the app
# install a server
RUN npm run build
RUN npm install -g serve

# run the server
CMD ["serve", "-s", "build"]
