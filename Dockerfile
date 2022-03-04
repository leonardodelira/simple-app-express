FROM node:14.0.0

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]