FROM node:18-alpine as build

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json .
RUN npm ci --omit=dev

COPY --from=build /app/build .

EXPOSE 3000

CMD ["npm", "start"]
