FROM node:8

COPY ./ /srv

WORKDIR /srv

RUN npm install .

ENTRYPOINT cd /srv && node ./bin/www
