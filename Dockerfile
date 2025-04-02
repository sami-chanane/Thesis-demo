FROM node:current-alpine3.21 AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .


FROM base AS test-stage
RUN npm test > test-report.txt


FROM scratch AS test-report
COPY --from=test-stage /app/test-report.txt test-report.txt


FROM base AS build-stage
EXPOSE 3000
CMD [ "node", "./server.js" ]


