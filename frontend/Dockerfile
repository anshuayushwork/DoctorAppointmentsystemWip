# Frontend Dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps || npm install
COPY angular.json tsconfig.json ./
COPY src ./src
RUN npx ng build --configuration production || npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist/docbook-ui/ /usr/share/nginx/html
EXPOSE 80
