FROM node:18-alpine

WORKDIR /opt/gateway

COPY . .

RUN npm config set registry https://npm.partdp.ir/ \
    && npm install \
    && npm install pm2@5.2.2 -g \
    && addgroup part \
    && adduser -G part part -D\
    && chown -R part:part /opt/gateway

USER part

CMD ["pm2-runtime", "start", "ecosystem.json"]
