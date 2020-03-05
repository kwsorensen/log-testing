FROM node:12.16.1-alpine3.10
WORKDIR /home/node

ADD ./index.js .
ADD ./package.json .

CMD ["/usr/local/bin/node","/home/node/index.js"]