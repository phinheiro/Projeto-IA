FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]