FROM node:18.16.1

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3006

CMD [ "npm", "run", "start" ]