FROM node:8
COPY ./ /app
WORKDIR /app
RUN npm install .
RUN npm run build
ENTRYPOINT cd /app && node backend/bin/www
