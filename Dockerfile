ARG NODE_VERSION=lts
ARG APP_DIR=/app
ARG EXPOSE_PORT=80
ARG NGINX_VERSION=alpine

# stage1
FROM node:${NODE_VERSION} as node
WORKDIR ${APP_DIR}
COPY . .
EXPOSE ${EXPOSE_PORT}
RUN npm install && npm run build --prod

# stage2
FROM nginx:${NGINX_VERSION}
RUN apk --no-cache add \
    libcrypto3=3.0.8-r0 \
    libssl3=3.0.8-r0 \
    libxpm=3.5.15-r0
COPY --from=node ${APP_DIR}/dist/beer-app /usr/share/nginx/html
