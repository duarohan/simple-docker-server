FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN apk update && apk add bash
RUN chmod +x -R lifecycle
CMD ["/bin/bash","-c","./lifecycle/migrate"]


