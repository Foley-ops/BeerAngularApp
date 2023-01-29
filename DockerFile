FROM node:lts as node
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

#stage2
FROM nginx:alpine
COPY --from=node /app/dist/beer-app /usr/share/nginx/html
