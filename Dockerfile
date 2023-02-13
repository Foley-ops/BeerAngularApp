FROM node:lts as node
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

#stage2
FROM nginx:alpine
RUN apk --no-cache add \ 
    libcrypto3=3.0.8-r0 \
    libssl3=3.0.8-r0 \
    libxpm=3.5.15-r0
COPY --from=node /app/dist/beer-app /usr/share/nginx/html
