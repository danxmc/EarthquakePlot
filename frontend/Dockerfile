FROM mhart/alpine-node:10.15.3

RUN mkdir /client
WORKDIR /client
COPY ./src /client/src
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

EXPOSE 3000