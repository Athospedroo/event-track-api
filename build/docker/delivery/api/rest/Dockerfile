FROM node:21.7-alpine

ARG SERVER
ENV SERVER=$SERVER

WORKDIR /event-track-api
COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 8085

CMD npm start