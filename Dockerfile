FROM node:18.3.0

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8080

ENTRYPOINT ["bash", "docker-entrypoint.sh"]