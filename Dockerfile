## stage One, build

FROM node:23.3.0-alpine3.19 AS build
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

## this is stage two , where the app actually runs

FROM node:23.3.0-alpine3.19
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
COPY --from=build /usr/dist ./dist
RUN echo "" > .env
RUN mv .env ./
RUN npm install pm2 -g
EXPOSE 3100
CMD ["pm2-runtime", "dist/index.js"]
