FROM node:18.4.0

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run web

EXPOSE 8080
CMD ["bash", "docker-entrypoint.sh"]