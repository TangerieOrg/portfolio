FROM --platform=$BUILDPLATFORM node:18.3.0 AS build

ARG FONTAWESOME_NPM_AUTH_TOKEN

ENV FONTAWESOME_NPM_AUTH_TOKEN=$FONTAWESOME_NPM_AUTH_TOKEN

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

COPY .npmrc .npmrc

RUN echo NPM Auth $FONTAWESOME_NPM_AUTH_TOKEN

RUN npm ci

COPY . .

RUN npm run build

FROM node:18.3.0

WORKDIR /app

COPY --from=build /app/dist /app

EXPOSE 3000

ENTRYPOINT ["npx", "serve", "-s", "."]