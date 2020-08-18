FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn add

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]

