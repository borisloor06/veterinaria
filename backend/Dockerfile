FROM node as depends
WORKDIR /app
COPY package.json .
RUN npm install

FROM node as test
WORKDIR /app
COPY --from=depends /app/node_modules ./node_modules
COPY . .
RUN npm run test

FROM node as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "start"]
