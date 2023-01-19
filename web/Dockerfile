FROM --platform=$BUILDPLATFORM node:18.3.0 AS build

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

COPY .npmrc .npmrc

RUN npm ci

COPY . .

RUN npm run build

FROM node:18.3.0

WORKDIR /app

COPY --from=build /app/dist /app

EXPOSE 3000

ENTRYPOINT ["npx", "serve", "-s", "."]