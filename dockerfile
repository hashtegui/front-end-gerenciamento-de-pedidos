FROM node:18.11.0-alpine3.16

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

USER node

WORKDIR /home/node/app/