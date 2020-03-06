FROM node:12.16.1-alpine3.10
WORKDIR /home/node

ADD ./index.js .
ADD ./package.json .
ADD ./run.sh .
RUN chmod 777 ./run.sh

CMD ["/bin/sh","./run.sh"]