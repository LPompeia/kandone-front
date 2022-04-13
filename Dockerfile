FROM node:16 as angular
WORKDIR /app
COPY ./package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/kandone /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

# docker build -t kandone-front .
# docker run -p 8081:80 kandone-front
