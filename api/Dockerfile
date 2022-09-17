FROM node:18.3.0

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm", "start"]