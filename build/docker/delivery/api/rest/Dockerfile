FROM node:21:6:1-alpine

ARG SERVER
ENV SERVER=$SERVER

WORKDIR /event-track-api
COPY . .

RUN npm install
RUN npm run build

EXPOSE 8085

CMD npm start