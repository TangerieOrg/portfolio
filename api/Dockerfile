FROM node:18.3.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8080

ENV NODE_ENV=production

ENTRYPOINT ["npm", "start"]