FROM node:21.7-alpine

ARG SERVER
ENV SERVER=$SERVER

WORKDIR /event-track-api
COPY . .

RUN npm install
RUN npm run build

EXPOSE 8079

CMD npm start